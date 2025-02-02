// pages/verify-email.js
"use client";
import { useEffect } from "react";
import { auth } from "@/app/utils/firebaseConfig";

const VerifyEmail = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        // Redirect to dashboard if email is verified
        window.location.href = "/dashboard";
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div class="app font-sans min-w-screen min-h-screen bg-grey-lighter py-8 px-4">
        <div class="mail__wrapper max-w-md mx-auto">
          <div class="mail__content bg-blue-500 text-white p-8 shadow-md">
            <div class="content__header  text-center tracking-wide border-b">
              <div className="flex flex-row justify-center items-center">
                <img
                  height={50}
                  width={50}
                  src="https://beyondchats.com/wp-content/uploads/2024/04/output-onlinepngtools.png"
                />
                <a href="#">BeyondChats</a>
              </div>{" "}
              <h1 class="text-3xl h-48 flex items-center justify-center">
                E-mail Confirmation
              </h1>
            </div>

            <div class="content__body py-8 border-b">
              <p>
                A verification email has been sent to your email address. Please
                check your inbox and click on the verification link to complete
                the registration process.{" "}
              </p>
            </div>

            <div class="content__footer mt-8 text-center text-grey-darker">
              <p>www.beyondchats.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
