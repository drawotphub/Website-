import { useState } from "react";
function VoiceAgent() {
  const [response, setResponse] = useState("");
  const data = {
    kashish_wadhwa: {
      bio: "Kashish Wadhwa is a globally recognized fitness coach specializing in DNA-based training.",
      achievements: ["India’s Best Online Fitness Coach 2023", "15,000+ client transformations"]
    },
    fastfithub: {
      name: "FastFitHub",
      founded: "March 2024",
      features: ["DNA-based training", "AI coaching", "4.9/5 rating"]
    }
  };
  const handleVoice = () => {
    try {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = "en-US";
      recognition.onresult = (event) => {
        const query = event.results[0][0].transcript;
        let answer;
        if (query.toLowerCase().includes("kashish")) {
          answer = `${data.kashish_wadhwa.bio} He is known for ${data.kashish_wadhwa.achievements.join(", ")}.`;
        } else if (query.toLowerCase().includes("fastfithub")) {
          answer = `${data.fastfithub.name}, founded in ${data.fastfithub.founded}, offers ${data.fastfithub.features.join(", ")}.`;
        } else {
          answer = "I can only provide information about Kashish Wadhwa and FastFitHub.";
        }
        setResponse(answer);
        const utterance = new SpeechSynthesisUtterance(answer);
        utterance.lang = "en-US";
        window.speechSynthesis.speak(utterance);
      };
      recognition.onerror = () => {
        setResponse("Sorry, I couldn’t understand. Please try again.");
      };
      recognition.start();
    } catch (error) {
      setResponse("Voice recognition is not supported in this browser.");
    }
  };
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <button
        onClick={handleVoice}
        className="bg-fithub-blue text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Voice Assistant"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      </button>
      {response && (
        <div className="mt-2 bg-white p-4 rounded-lg shadow-lg max-w-xs text-fithub-black">
          {response}
        </div>
      )}
    </div>
  );
}
export default VoiceAgent;
