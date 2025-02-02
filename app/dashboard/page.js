// pages/dashboard.js
"use client";
import { useEffect, useState } from "react";
import { auth } from "@/app/utils/firebaseConfig";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/auth/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const fetchMetaDescription = async (url) => {
    if (!url) return;

    setIsFetching(true);
    try {
      const response = await fetch(
        `https://api.microlink.io/?url=${encodeURIComponent(url)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.data && data.data.description) {
        setMetaDescription(data.data.description);
        setCompanyDescription(data.data.description);
      } else {
        setMetaDescription("No meta-description found.");
      }
    } catch (error) {
      console.error("Error fetching meta description:", error);
      setMetaDescription("Error fetching meta-description.");
    } finally {
      setIsFetching(false);
    }
  };

  const handleWebsiteChange = (e) => {
    const url = e.target.value;
    setCompanyWebsite(url);

    // Debounce the fetch request to avoid excessive API calls
    clearTimeout(window.fetchMetaDescriptionTimeout);
    window.fetchMetaDescriptionTimeout = setTimeout(() => {
      fetchMetaDescription(url);
    }, 1000);
  };

  const handleDescriptionChange = (e) => {
    setCompanyDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard/setup");
  };

  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 rounded-md shadow-lg md:grid-cols-12 border">
        <div className="bg-gray-700 md:col-span-4 rounded-l-md p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">
            Setup Organisation
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
        <form onSubmit={handleSubmit} className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                className="appearance-none bg-transparent border-b border-blue-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                type="text"
                id="companyName"
                placeholder="Enter company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="companyWebsite"
              >
                Company Website URL
              </label>
              <input
                className="appearance-none bg-transparent border-b border-blue-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                type="url"
                id="companyWebsite"
                placeholder="Enter company website URL"
                value={companyWebsite}
                onChange={handleWebsiteChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="companyDescription"
              >
                Company Description
              </label>
              <textarea
                rows="10"
                className="appearance-none bg-transparent border-b border-blue-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                id="companyDescription"
                placeholder="Enter company description"
                value={companyDescription}
                onChange={handleDescriptionChange}
              ></textarea>
              {/* {metaDescription && (
                <p className="text-sm text-gray-500 mt-2">
                  Fetched Meta-Description: {metaDescription}
                </p>
              )} */}
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block text-gray-500 font-bold">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <button
                className="shadow bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
