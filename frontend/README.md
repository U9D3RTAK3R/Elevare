# 📘 Digital Mental Health & Psychological Support System

**SIH 2025 Problem Statement: SIH25092**
*"Development of a Digital Mental Health and Psychological Support System for Students in Higher Education"*

---

## 🌱 Overview

Mental health is one of the most critical aspects of student wellbeing. This project aims to create a **digital platform** for providing psychological support, self-assessment surveys, appointment booking with professionals, and AI-powered chatbot assistance.

The system is designed with a **student-first approach**, ensuring that the platform is uplifting, aesthetic, and easy to use.

---

## 🛠️ Tech Stack

* **Frontend**: [React.js](https://react.dev/) + [TailwindCSS](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/)
* **Backend**: [Django](https://www.djangoproject.com/) + [Django REST Framework](https://www.django-rest-framework.org/)
* **Database**: [PostgreSQL](https://www.postgresql.org/)
* **Charts**: [Chart.js](https://www.chartjs.org/) via `react-chartjs-2`
* **Chatbot**: Custom AI chatbot powered by intents.json

---

## ✨ Features

### 🔓 Public (Before Login)

* **Landing Page**: Uplifting animation, motivational quotes, and call-to-action login.
* **Navigation Bar**: Home | About | Services | Resources | Contact | Sign In.
* **Chatbot Widget**: AI-powered assistant available at all times.

### 🔒 Authenticated (After Login)

* **Navbar**: User name + avatar + logout option.
* **Dashboard**:

  * Mood tracker over 30 days.
  * Survey history.
  * Past consultations.
  * AI chatbot assistant.
* **Take a Survey**: Evidence-based mental health self-assessment questionnaires.
* **Book Appointment**:

  * Psychologist/Counselor cards with bio, specialization, and availability.
  * Calendar-based slot selection with confirmation.

### 🎨 UI/UX

* Single theme (Lavender Colour Scheme).
* Smooth animations & transitions.
* Minimalist, distraction-free design for better mental comfort.

---

## 📂 Project Structure

```
mental-health-support-system/
│
├── backend/               # Django backend
│   ├── mentalhealth/      # Project settings
│   ├── users/             # Auth & profiles
│   ├── appointments/      # Appointment booking
│   ├── surveys/           # Mental health surveys
│   ├── chatbot/           # AI chatbot
│
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # Navbar, Chatbot, etc.
│   │   ├── pages/         # Landing, Dashboard, Survey, Appointment
│   │   ├── assets/        # GIFs, logos, icons
│
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Backend Setup (Django + PostgreSQL)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # (Windows: venv\Scripts\activate)
pip install -r requirements.txt

# Create DB in PostgreSQL (update settings.py with your creds)
psql -U postgres
CREATE DATABASE mentalhealth_db;

# Run migrations
python manage.py migrate
python manage.py runserver
```

Backend will run at 👉 **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**

---

### 2️⃣ Frontend Setup (React + Tailwind + Chart.js)

```bash
cd frontend
npm install
npm start
```

Frontend will run at 👉 **[http://localhost:5173/](http://localhost:5173/)**

---

### 🔗 API Integration

* Frontend uses **Axios** to fetch data from Django REST APIs.
* Update API base URL in `frontend/src/api.js` if backend is running on a different host/port.

---

## 📊 Screenshots / Demo

*(SCREENSHOTS COMING SOON!)*

* Landing Page
* Dashboard with mood chart
* Chatbot interaction
* Appointment booking flow

---

## 👥 Team & Contributions

This project is developed for **Smart India Hackathon 2025 (SIH)** by our team **ClutchRunners 86**.

### Contributors:

* **Frontend Development** → [@AtanuDhar](https://github.com/atanudhar), [@KALIGHAT-AC](https://github.com/KALIGHAT-AC), [@AdrijaKundu](https://github.com/adrija12), [@PredatorXOP](https://github.com/)
* **Backend Development** → [@AnirbanRC](https://github.com/anir183), [@U9D3RTAK3R](https://github.com/U9D3RTAK3R)
* **AI/Chatbot Integration** → [@U9D3RTAK3R](https://github.com/U9D3RTAK3R), [@AnirbanRC](https://github.com/anir183)
* **Database & Deployment** → 

Furthur contributions are welcome! 🚀

---

## 📜 License

This project is open-source under the **MIT License**.

---

⚡ *"Your Mental Health Matters. Let’s build a future where students can access support anytime, anywhere."*
