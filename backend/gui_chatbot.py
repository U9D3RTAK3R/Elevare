import json
import random
import nltk
import numpy as np
import os
import threading
import tkinter as tk
from tkinter import scrolledtext
from tkinter import font as tkFont
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# --- ROBUST NLTK DATA SETUP ---
# This block will check for each required NLTK package and download it if missing.
try:
    nltk.data.find('tokenizers/punkt')
    nltk.data.find('corpora/stopwords')
    nltk.data.find('corpora/wordnet')
except LookupError:
    print("One or more NLTK packages not found. Downloading...")
    nltk.download('punkt', quiet=True)
    nltk.download('stopwords', quiet=True)
    nltk.download('wordnet', quiet=True)
    print("Downloads complete.")
# ------------------------------------

# --- THE DEFINITIVE CHATBOT LOGIC ---
class IntentChatbot:
    def __init__(self, intents_file):
        self.intents_file = intents_file
        self.lemmatizer = nltk.WordNetLemmatizer()
        self.intents_data = {}
        self.current_context = None
        self.last_response = None
        self.vectorizer = TfidfVectorizer(tokenizer=self._tokenize, stop_words='english')
        self._load_and_train_vectorizer()

    def _load_and_train_vectorizer(self):
        print(f"Loading knowledge base from '{self.intents_file}'...")
        if not os.path.exists(self.intents_file):
            raise FileNotFoundError(f"The intents file was not found at '{self.intents_file}'")

        with open(self.intents_file, 'r', encoding='utf-8') as f:
            intents_json = json.load(f)

        self.intents_data = {intent['tag']: intent for intent in intents_json['intents']}
        all_patterns = [p for intent in self.intents_data.values() for p in intent.get('patterns', [])]
        self.vectorizer.fit(all_patterns)
        print("✅ Bot knowledge base is ready and vectorized.")

    def _tokenize(self, sentence):
        tokens = nltk.word_tokenize(sentence)
        lemmatized_tokens = [self.lemmatizer.lemmatize(token.lower()) for token in tokens]
        return lemmatized_tokens

    def get_response(self, user_input):
        user_input_lower = user_input.lower().strip()

        # Pass 1: High-priority "meta" checks
        if self._check_high_priority_intent('crisis_help', user_input_lower):
            return self._get_varied_response(self.intents_data['crisis_help'])
        if self._check_high_priority_intent('frustration_slang', user_input_lower):
            self.current_context = None
            return self._get_varied_response(self.intents_data['frustration_slang'])
        if user_input_lower in [p.lower() for p in self.intents_data['general_refusal']['patterns']]:
            self.current_context = None
            return self._get_varied_response(self.intents_data['general_refusal'])

        # Pass 2: Find the best matching intent
        best_match_tag = self._find_best_intent_match(user_input)

        # Pass 3: Generate Response
        if best_match_tag:
            chosen_intent = self.intents_data[best_match_tag]
            if 'context_setter' in chosen_intent: self.current_context = chosen_intent['context_setter']
            elif 'context_filter' not in chosen_intent: self.current_context = None
            return self._get_varied_response(chosen_intent)
        else:
            self.current_context = None
            return self._get_varied_response(self.intents_data['fallback'])

    def _check_high_priority_intent(self, tag, user_input_lower):
        return any(p.lower() in user_input_lower for p in self.intents_data[tag]['patterns'])

    def _find_best_intent_match(self, user_input):
        input_vector = self.vectorizer.transform([user_input])
        scores = {tag: cosine_similarity(input_vector, self.vectorizer.transform(intent['patterns'])).max()
                  for tag, intent in self.intents_data.items() if intent.get('patterns')}

        # New Hierarchical Logic
        if scores.get('positive_feeling', 0) > 0.7: return 'positive_feeling'
        if self.current_context:
            contextual_matches = {t: s for t, s in scores.items() if self.intents_data[t].get('context_filter') == self.current_context}
            if contextual_matches:
                best_context_tag = max(contextual_matches, key=contextual_matches.get)
                if contextual_matches[best_context_tag] > 0.6: return best_context_tag

        glue_tags = {'greeting', 'goodbye', 'thanks', 'about', 'fallback', 'positive_feeling', 'affirmation', 'agreement', 'user_confusion', 'nuanced_negative'}
        general_matches = {t: s for t, s in scores.items() if 'context_filter' not in self.intents_data[t] and t not in glue_tags}
        if general_matches:
            best_general_tag = max(general_matches, key=general_matches.get)
            if general_matches[best_general_tag] > 0.6: return best_general_tag
        
        best_glue_tag = max((scores.get(t, 0), t) for t in glue_tags)[1]
        if scores.get(best_glue_tag, 0) > 0.5: return best_glue_tag
        
        return None

    def _get_varied_response(self, intent):
        responses = intent['responses']
        if len(responses) == 1: self.last_response = responses[0]; return responses[0]
        possible_responses = [r for r in responses if r != self.last_response] or responses
        chosen_response = random.choice(possible_responses)
        self.last_response = chosen_response
        return chosen_response

# --- TKINTER GUI APPLICATION ---
class ChatApplication:
    def __init__(self, master, assistant):
        self.master = master
        self.assistant = assistant
        master.title("Mental Health Support Chatbot")
        master.geometry("500x600")
        master.configure(bg="#2c3e50")

        self.main_font = tkFont.Font(family="Calibri", size=11)
        self.bold_font = tkFont.Font(family="Calibri", size=11, weight="bold")
        
        main_frame = tk.Frame(master, bg="#2c3e50")
        main_frame.pack(pady=10, padx=10, fill="both", expand=True)

        self.chat_area = scrolledtext.ScrolledText(
            main_frame, wrap=tk.WORD, state='disabled', font=self.main_font,
            bg="#34495e", fg="white", bd=0, relief="flat", insertbackground="white"
        )
        self.chat_area.pack(pady=5, padx=5, fill="both", expand=True)
        
        self.chat_area.tag_config('user', foreground="#3498db", font=self.bold_font) # Bright Blue
        self.chat_area.tag_config('bot', foreground="#2ecc71", font=self.bold_font)  # Bright Green

        input_frame = tk.Frame(main_frame, bg="#2c3e50")
        input_frame.pack(pady=10, padx=5, fill="x")

        self.entry_box = tk.Entry(
            input_frame, font=self.main_font, width=40, bg="#34495e", fg="white",
            bd=0, relief="flat", insertbackground="white"
        )
        self.entry_box.pack(side="left", fill="x", expand=True, ipady=8, padx=(0, 10))
        self.entry_box.bind("<Return>", self.send_message_event)

        self.send_button = tk.Button(
            input_frame, text="Send", command=self.send_message, font=self.bold_font,
            bg="#3498db", fg="white", relief="flat", bd=0, activebackground="#2980b9", activeforeground="white"
        )
        self.send_button.pack(side="right")

        self.add_message("Bot: ", "Disclaimer: I am an AI assistant, not a therapist. If you are in crisis, please contact a professional.", 'bot')

    def send_message_event(self, event):
        self.send_message()

    def send_message(self):
        user_input = self.entry_box.get()
        if user_input.strip():
            self.add_message("You: ", user_input, 'user')
            self.entry_box.delete(0, tk.END)
            # Run the bot's response logic in a separate thread to keep the GUI responsive
            threading.Thread(target=self.get_bot_response, args=(user_input,), daemon=True).start()

    def get_bot_response(self, user_input):
        bot_response = self.assistant.get_response(user_input)
        # Use master.after() to safely update the GUI from a different thread
        self.master.after(0, self.add_message, "Bot: ", bot_response, 'bot')
    
    def add_message(self, prefix, message, tag):
        self.chat_area.config(state='normal')
        self.chat_area.insert(tk.END, prefix, tag)
        self.chat_area.insert(tk.END, message + "\n\n")
        self.chat_area.config(state='disabled')
        self.chat_area.yview(tk.END) # Auto-scroll to the bottom

# --- FINAL MAIN EXECUTION BLOCK ---
if __name__ == '__main__':
    INTENTS_FILE = 'intents.json'
    
    if not os.path.exists(INTENTS_FILE):
        print(f"Error: `{INTENTS_FILE}` not found. Make sure it is in the same folder as the script.")
    else:
        # Load the final, intelligent intent-based bot
        assistant = IntentChatbot(intents_file=INTENTS_FILE)

        # Create and run the GUI
        root = tk.Tk()
        app = ChatApplication(root, assistant)
        root.mainloop()
