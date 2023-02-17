import { Router } from "express";
import * as controller from "../controllers/appController.js";
import auth from "../middleware/auth.js";
const router = Router();

// POST methods.
router.route("/register").post(controller.register); // register a user.
// router.route("/registerMail").post(); // send the mail.
router.route("/authenticate").post((req, res) => res.send()); // authenticate user.
router.route("/login").post(controller.verifyUser, controller.login); // login app.

// GET methods.
router.route("/user/:username").get(controller.getUser); // user with username.
router.route("/generateOTP").get(controller.generateOTP); // generate random OTP.
router.route("/verifyOTP").get(controller.verifyOTP); // verify generated OTP.
router.route("/createResetSession").get(controller.createResetSession); // reset all the variables.

// PUT methods.
router.route("/updateUser").put(auth, controller.updateUser); // update the user profile.
router.route("/resetPassword").put(controller.resetPassword); // Reset password.

export default router;
