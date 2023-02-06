import React from "react";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { validateResetPassword } from "../helper/validate";

import styles from "../styles/username.module.css";

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      new_password: "",
      confirm_password: "",
    },
    validate: validateResetPassword,
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
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new password
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("new_password")}
                className={styles.textbox}
                type="password"
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps("confirm_password")}
                className={styles.textbox}
                type="password"
                placeholder="Confirm Password"
              />
              <button className={styles.btn} type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
