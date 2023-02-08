import React from "react";
import { Toaster } from "react-hot-toast";

import styles from "../styles/username.module.css";

const Recover = () => {
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-3xl font-bold">Authenticator</h4>
            <span className="py-2 text-xl w-2/3 text-center text-gray-500">
              Enter the OTP
            </span>
          </div>

          <form className="pt-10">
            <div className="textbox flex flex-col items-center gap-6">
              <div className="input text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 digit OTP sent to your email address
                </span>
                <input
                  className={styles.textbox}
                  type="OTP"
                  placeholder="Password"
                />
              </div>
              <button className={styles.btn} type="submit">
                Recover
              </button>
            </div>
          </form>

          <div className="text-center py-1">
            <span className="text-gray-900">
              can't get OTP?{" "}
              <button className="text-blue-700 underline">Resend OTP</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recover;
