import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { validatePassword } from "../helper/validate";

import styles from "../styles/username.module.css";

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: validatePassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-3xl font-bold">Authenticator</h4>
            <span className="py-2 text-xl w-2/3 text-center text-gray-500">
              Enter the password
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="Password"
              />
              <button className={styles.btn} type="submit">
                Signin
              </button>
            </div>
          </form>

          <div className="text-center py-1">
            <span className="text-gray-900">
              Forgot Password?{" "}
              <Link className="text-blue-700 underline" to="/recover">
                Recover Now
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
