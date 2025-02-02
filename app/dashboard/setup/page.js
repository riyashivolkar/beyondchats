"use client";
import { useEffect, useState } from "react";
import { Loader, CheckCircle } from "react-feather"; // Assuming you're using this for the spinner
import { useRouter } from "next/navigation";
import { auth } from "@/app/utils/firebaseConfig";

const SetupProgress = () => {
  const router = useRouter();

  const webpages = [
    {
      url: "https://example.com/home",
      status: "scraped",
      chunks: ["Welcome section", "Feature highlights"],
    },
    {
      url: "https://example.com/about",
      status: "scraped",
      chunks: ["Company history", "Mission statement"],
    },
    { url: "https://example.com/blog", status: "pending", chunks: [] },
    { url: "https://example.com/contact", status: "pending", chunks: [] },
  ];

  // Set the first scraped webpage as the default selected page
  const [selectedPage, setSelectedPage] = useState(
    webpages.find((page) => page.status === "scraped") || null
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/dashboard/setup/integration");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 rounded-md shadow-lg md:grid-cols-12 border">
        {/* Left Section (Title, Description, Features) */}
        <div className="bg-gray-700 md:col-span-4 rounded-l-md p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">
            Setup Progress
          </p>
          <div className="flex flex-row justify-start items-center">
            <a
              href="#"
              className="text-2xl  sm:text-3xl leading-normal font-extrabold tracking-tight"
            >
              Beyond
              <span className="text-blue-500">Chats</span>{" "}
            </a>
          </div>

          <p className="mt-4 leading-7 text-gray-200">
            Don’t let your brand lose customers. Qualify your leads to 3X your
            sales with our intelligent AI chatbot. It’s like hiring a sales
            manager who knows your business in and out and works 24*7.
          </p>
          {[
            { img: "correct", text: "Advanced Reporting" },
            { img: "toggle", text: "Business actions" },
            { img: "brain", text: "Intelligent Analytics" },
            { img: "language", text: "Language support: 70+" },
          ].map(({ img, text }) => (
            <div key={text} className="flex items-center mt-5">
              <img src={`/svg/${img}.svg`} width={25} height={25} alt={text} />
              <span className="text-sm ml-2">{text}</span>
            </div>
          ))}
        </div>

        {/* Right Section (Form & Webpage List) */}
        <div className="md:col-span-8 sm:p-6 p-4">
          <h2 className="text-xl font-bold mb-4">Webpages Detected</h2>

          {/* Webpage List */}
          <div className="grid gap-2 sm:gap-4 md:grid-cols-1 sm:grid-cols-1">
            {webpages.map((page) => (
              <div
                key={page.url}
                className={`p-4 border cursor-pointer flex justify-between items-center rounded-lg shadow-md ${
                  selectedPage?.url === page.url ? "bg-blue-100" : ""
                }`}
                onClick={() => setSelectedPage(page)}
              >
                <span className="text-blue-900 text-sm sm:text-base">
                  {page.url}
                </span>
                {page.status === "scraped" ? (
                  <span className="text-green-500 text-sm sm:text-base flex items-center gap-2">
                    <CheckCircle className="w-4 h-4   animate-bounce  text-green-500" />
                    Scraped
                  </span>
                ) : (
                  <span className="text-yellow-500 text-sm sm:text-base flex items-center gap-2">
                    <Loader className="animate-spin w-4 h-4" /> Pending
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Webpage Details (Always Open for Scraped Data) */}
          {selectedPage && (
            <div className="mt-6 p-4 border rounded-lg">
              <h3 className="font-semibold text-lg">{selectedPage.url}</h3>
              <p className="text-gray-600">
                {selectedPage.status === "scraped"
                  ? "Scraped Data Chunks:"
                  : "Scraping in progress..."}
              </p>
              <ul className="list-disc list-inside mt-2">
                {selectedPage.chunks.length > 0 ? (
                  selectedPage.chunks.map((chunk, index) => (
                    <li key={index}>{chunk}</li>
                  ))
                ) : (
                  <li className="text-gray-400 italic">No data yet</li>
                )}
              </ul>
            </div>
          )}

          {/* Buttons to move forward */}
          <div className="mt-6 flex justify-between">
            {/* Back Button */}
            <button
              className="shadow bg-white hover:bg-gray-100 border border-gray-500 focus:shadow-outline focus:outline-none text-gray-600 font-bold py-2 px-6 rounded"
              onClick={() => router.push("/dashboard")}
            >
              Back
            </button>

            {/* Continue Setup Button */}
            <button
              className={`
 cursor-pointer
                               shadow bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded

                
              
                `}
              type="button"
              onClick={() => router.push("/dashboard/setup/integration")}
              // disabled={webpages.some((page) => page.status === "pending")}
            >
              🚀 Continue Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupProgress;
