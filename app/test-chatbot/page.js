"use client";
import { useState } from "react";

const TestChatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="relative w-screen h-screen">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white p-3 flex justify-between items-center z-50">
        <span>Chatbot not working as intended?</span>
        <button
          className="bg-blue-500 px-3 py-1 rounded"
          onClick={() => alert("Redirect to feedback form")}
        >
          Share Feedback
        </button>
      </div>

      {/* Client Website (Google) */}
      <iframe
        src="https://en.wikipedia.org/wiki/Main_Page"
        className="w-full h-full border-none"
      ></iframe>

      {/* Chatbot Overlay */}
      {showChatbot && (
        <div className="fixed bottom-5 right-5 bg-white shadow-lg rounded-lg w-80 h-96 p-4 z-50">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button
              onClick={() => setShowChatbot(false)}
              className="text-red-500"
            >
              ✖
            </button>
          </div>
          <div className="p-3 text-gray-600">
            🤖 Hello! I’m a dummy chatbot. How can I assist you?
          </div>
        </div>
      )}

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full  bg-blue-500"
      >
        {" "}
        <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full      bg-blue-500 animate-ping"></div>
        <div className="relative z-20 border-2 border-blue-500 rounded-full">
          <img
            className="  "
            height={50}
            width={50}
            src="https://beyondchats.com/wp-content/uploads/2024/04/output-onlinepngtools.png"
          />
        </div>
      </button>
    </div>
  );
};

export default TestChatbot;
