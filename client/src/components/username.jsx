import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";

import styles from "../styles/username.module.css";

const UserName = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              A simple authorization application
            </span>
          </div>

          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                className={styles.textbox}
                type="text"
                placeholder="User Name"
              />
              <button className={styles.btn} type="submit">
                Let's Go
              </button>
            </div>
          </form>

          <div className="text-center py-4">
            <span className="text-gray-500">
              Not a Member{" "}
              <Link className="text-green-500" to="/register">
                Register Now
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserName;
