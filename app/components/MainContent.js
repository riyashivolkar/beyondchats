"use client";
import React, { useRef } from "react";

const CodeBlock = ({ language, code }) => {
  const buttonRef = useRef(null);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      buttonRef.current.innerText = "Copied!";
      setTimeout(() => {
        buttonRef.current.innerText = "Copy";
      }, 1000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className="relative bg-gray-900 text-white rounded-lg p-6 my-6 shadow-lg">
      <pre className="overflow-auto mt-5 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button
        ref={buttonRef}
        onClick={copyCode}
        className="absolute top-3 right-3 text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
      >
        Copy
      </button>
    </div>
  );
};

const IntegrationGuide = () => {
  return (
    <main className="max-w-6xl mx-auto my-12 p-6 ">
      <div className=" py-3 sm:py-10">
        <h1 className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 ">
          Integrate BeyondChat in Minutes
        </h1>
        <p className="text-blue-500 text-center mt-2">
          Follow these simple steps to add BeyondChat to your website.
        </p>
      </div>

      <section className="mt-8">
        <p className="mt-2 text-lg  tracking-tight text-gray-950 max-lg:text-center">
          <span className=" text-gray-800"> Step 1: </span>
          Add this code inside your website
        </p>
        <CodeBlock
          language="html"
          code={`<script src="https://cdn.beyondchat.com/widget.js" data-chat-id="YOUR_CHAT_ID" defer></script>`}
        />
      </section>

      <section className="my-6 py-3">
        <h2 className="mt-2 text-lg  tracking-tight text-gray-950 max-lg:text-center">
          Step 2: Verify Installation
        </h2>
        <p className="text-gray-500 mt-2">
          Once you have successfully added the code snippet to the head section
          of your website, save the changes and refresh your site. The chatbot
          widget should now appear at the bottom right corner of your webpage,
          ready to assist your visitors in real-time. If you do not see the
          widget, ensure the script is correctly placed and that there are no
          conflicting scripts affecting its functionality.
        </p>
      </section>

      <section className="my-6">
        <h2 className="mt-2 text-lg  tracking-tight text-gray-950 max-lg:text-center">
          Step 3: Customize Settings
        </h2>
        <p className="text-gray-500 mt-2">
          Log in to your BeyondChat dashboard to fully customize your chat
          widget. From the dashboard, you can personalize the widget’s
          appearance by selecting brand colors, setting up a custom welcome
          message to greet visitors, and configuring automation rules to
          streamline responses. Additionally, you can enable smart triggers,
          define chatbot workflows, and integrate the chat system with your CRM
          or support tools for a seamless customer experience.
        </p>
      </section>
    </main>
  );
};

export default IntegrationGuide;
