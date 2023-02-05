import { toast } from "react-hot-toast";

// validate login page username.
export async function validateUserName(values) {
  const errors = verifyUserName({}, values);
  return errors;
}

// validate password.
export async function validatePassword(values) {
  const errors = verifyPassword({}, values);
  return errors;
}

// verify password.
function verifyPassword(errors = {}, values) {
  const SPECIAL_CHARS =
    /^[^<>{}\"/|;:.,~!?@#$%^=&*\\]\\\\()\\[¿§«»ω⊙¤°℃℉€¥£¢¡®©0-9_+]*$/;

  if (!values.password) {
    errors.password = toast.error("Password Required ...!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password ...!");
  } else if (values.password.length < 6) {
    errors.password = toast.error(
      "Password must be more than 6 characters long ...!"
    );
  } else if (!SPECIAL_CHARS.test(values.password)) {
    errors.password = toast.error("Password must have special characters ...!");
  }

  return errors;
}

// validate username.
function verifyUserName(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("username required ....!");
  } else if (values.username.includes("")) {
    error.username = toast.error("Invalid username ....!");
  }
  return error;
}
