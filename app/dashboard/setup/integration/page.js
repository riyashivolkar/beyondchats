"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";

function HeroSection16() {
  const router = useRouter();

  const buttons = [
    { label: "Test chatbot", path: "/test-chatbot" },
    { label: "Integrate on your website", path: "/integrate-on-website" },
    { label: "Test integration", path: "/test-integration" },
  ];

  return (
    <>
      <Header />
      <header className="bg-white p-8 text-center">
        <div className="relative grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] bg-center bg-contain bg-no-repeat bg-[url('/chatbot/1.jpg')]">
          {/* Overlay */}
          <div className="absolute inset-0 bg-white opacity-80"></div>

          {/* Content */}
          <div className="relative container mx-auto px-4 text-center">
            <span className="inline-block text-xs rounded-lg border border-gray-200 bg-white py-1 px-4 font-medium text-gray-700">
              Exciting News! Introducing our latest innovation
            </span>
            <h1 className="my-6 text-2xl lg:text-4xl">
              Get ready to experience a new level of{" "}
              <span className="text-blue-500">performance</span> and{" "}
              <span className="text-blue-500">functionality</span>.
            </h1>
            <p className="text-gray-800 text-base lg:text-lg">
              Improve customer happiness instantly with BeyondChat’s AI-driven
              chatbots and features.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              {buttons.map(({ label, path }) => (
                <button
                  key={path}
                  onClick={() => router.push(path)}
                  className="bg-gray-700 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeroSection16;
