import React from "react";

const ContactIllustration = () => (
  <svg
    width="500"
    height="260"
    viewBox="0 0 500 260"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect width="500" height="260" fill="#593f92" />

    {/* Decorative dots */}
    <g fill="#fff" opacity="0.9">
      <circle cx="60" cy="50" r="2" />
      <circle cx="120" cy="30" r="2" />
      <circle cx="450" cy="60" r="2" />
      <circle cx="420" cy="40" r="3" />
      <circle cx="250" cy="20" r="2" />
    </g>

    {/* Envelope */}
    <rect
      x="120"
      y="100"
      width="260"
      height="120"
      rx="8"
      fill="#ECECEC"
      stroke="#D5D5D5"
      strokeWidth="2"
    />
    <path
      d="M120 100l130 90 130-90"
      fill="#fff"
      stroke="#D5D5D5"
      strokeWidth="2"
    />

    {/* Chat bubble on envelope */}
    <rect x="190" y="60" width="120" height="50" rx="10" fill="white" />
    <rect x="205" y="75" width="80" height="6" rx="3" fill="#593f92" />
    <rect
      x="205"
      y="87"
      width="60"
      height="6"
      rx="3"
      fill="#593f92"
      opacity="0.8"
    />

    {/* Friendly character */}
    <circle cx="80" cy="190" r="30" fill="white" />
    <circle cx="70" cy="185" r="5" fill="#593f92" />
    <circle cx="90" cy="185" r="5" fill="#593f92" />
    <path
      d="M70 198c6 5 14 5 20 0"
      stroke="#593f92"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Waving hand */}
    <circle
      cx="105"
      cy="160"
      r="12"
      fill="#ECECEC"
      stroke="#D5D5D5"
      strokeWidth="2"
    />

    {/* Shadow */}
    <ellipse cx="250" cy="235" rx="90" ry="10" fill="#4A2F82" opacity="0.6" />
  </svg>
);

export default ContactIllustration;
