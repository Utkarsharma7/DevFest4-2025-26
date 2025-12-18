"use client";

import { useState } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const FAQ = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border border-white/20 rounded-lg overflow-hidden bg-black/20 backdrop-blur-md">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-3 md:p-4 lg:p-5 text-left hover:bg-white/5 transition-colors duration-200"
      >
        <span className={`text-white font-semibold text-base md:text-lg lg:text-xl ${orbitron.className}`}>
          {question}
        </span>
        <span className={`text-white text-xl md:text-2xl transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-3 md:px-4 lg:px-5 pb-3 md:pb-4 lg:pb-5 pt-2">
          <p className={`text-white/90 text-sm md:text-base lg:text-lg leading-relaxed ${orbitron.className}`}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState([0]); // Default first item open

  const toggleItem = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const questions = [
    "1. What is DevFest?",
    "2. When and where is DevFest 4.0 happening?",
    "3. Who can participate in DevFest?",
    "4. Is there a registration fee for DevFest events?",
    "5. How can I register for specific events at DevFest?",
    "6. What are the prizes for the hackathon and GameJam?",
    "7. Can participants attend DevFest virtually?",
    "8. Will there be certificates provided for participation?",
    "9. How can I stay updated on DevFest announcements and news?",
    "10. How do I contact the organizers if I have more questions?",
  ];

  const answers = [
    "   - DevFest is an annual technical festival organized by Developers' Society, BITS Goa, featuring a series of events, including hackathons, gamejam, workshop, and expert speaker session, aimed at fostering a vibrant coding culture.",
    "   - DevFest 4.0 is scheduled from January 17th to January 19th, 2025. The event will take place in a hybrid mode, with in-person activities at BITS Pilani - Goa, and nationwide virtual participation.",
    "   - DevFest is open to everyone across the globe. Whether you're a seasoned developer or a beginner, there's something for everyone.",
    "   - No, all events at DevFest are entirely free.",
    "   - Event-specific registration details is available on the DevFest website. Simply visit the website, navigate to the event of your interest, and follow the registration instructions.",
    "   - Prizes for the hackathon and GameJam include cash rewards, vouchers, and more. The total prize pool is worth Rs. 20 lakhs+.",
    "   - Yes, DevFest offers nationwide virtual participation.",
    "   - Yes, participants will receive certificates for their involvement in DevFest events. These certificates acknowledge your participation and contribution to the festival.",
    "   - Follow us on our official social media channels and regularly visit the DevFest website for the latest updates, announcements, and news.",
    "   - For any inquiries, you can reach out to the DevFest organizing team through the provided contact details on the website or by emailing devsocbpgc@gmail.com.",
  ];

  return (
    <div className={`w-full p-2 md:p-4 ${orbitron.className}`}>
      <h2 className={`text-white font-bold mb-6 md:mb-8 text-4xl md:text-5xl lg:text-6xl ${orbitron.className}`}>
        FAQs
      </h2>
      <div className="space-y-3">
        {questions.map((question, i) => (
          <FAQ
            key={i}
            question={question}
            answer={answers[i]}
            isOpen={openIndex.includes(i)}
            onToggle={() => toggleItem(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;

