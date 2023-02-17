import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";
import { jwt } from "jsonwebtoken";
import ENV from "dotenv/config";

// MIDDLEWARE for verify user.
export async function verifyUser(req, res, next) {
  try {
    const { username } = req.method == "GET" ? req.query : req.body;

    // check  the user existance
    let exist = await userModel.findOne({ username });
    if (!exist) return res.status(404).send({ error: "can't find user" });
    next();
  } catch (error) {
    return res.status(404).send({ error: "Authentication error" });
  }
}

/** POST: http://localhost:8080/api/register
@param: {
    "username": "example123",
    "password": "admin123",
    "email": "example@gmail.com",
    "firstName": "bill",
    "lastName": "william",
    "mobile": "8009860560",
    "address": "Apt. 556, Kulas Light, Gwenborough",
    "profile": ""
}
*/
export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;

    //check the existing user.
    const existUsername = new Promise((resolve, reject) => {
      UserModel.findOne({ username }, (err, user) => {
        if (err) reject(new Error(err));
        if (user) reject({ error: "Please use unique username" });

        resolve();
      });
    });

    //check the existing email.
    const existEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email }, (err, email) => {
        if (err) reject(new Error(err));
        if (email) reject({ error: "Please use your username" });

        resolve();
      });
    });

    Promise.all([existUsername, existEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashPassword) => {
              const user = new userModel({
                username,
                password: hashedPassword,
                profile: profile || "",
                email,
              });

              //return save result as response.
              user
                .save()
                .then((result) =>
                  res
                    .status(201)
                    .send({ msg: "New User Registeration Successfull....!" })
                )
                .catch((error) => res.status(500).send({ error }));
            })
            .catch((error) => {
              return res.status(500).send({
                error: "Enable to hashed password",
              });
            });
        }
      })
      .catch((error) => {
        return res.status(500).send({
          error: "Enable to hashed password",
        });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
}

/** POST: http://localhost:8080/api/login
@param: {
    "username": "example123",
    "password": "admin123",
}
*/
export async function login(req, res) {
  const { username, password } = req.body;
  try {
    userModel
      .findOne({ username })
      .then((user) => {
        bcrypt
          .compare(password, user.password)
          .then((passwordCheck) => {
            if (!passwordCheck)
              return res.status(400).send({ error: "Don't have any password" });

            //create JWT token
            const token = jwt.sign(
              {
                userId: user._id,
                username: user.username,
              },
              ENV.JWT_SECRET,
              { expiresIn: "24h" }
            );
            return res.status(200).send({
              msg: "Login Successfull",
              username: user.username,
              token,
            });
          })
          .catch((error) => {
            return res.status(404).send("Password doesnot match ...!");
          });
      })
      .catch((error) => {
        return res.status(404).send({ error: "username not exists" });
      });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

// POST: http://localhost:8080/api/getUser/<username>
export async function getUser(req, res) {
  const { username } = req.params;
  try {
    if (!username) return res.status(501).send({ error: "Invalid username" });

    username.findOne({ username }, (err, user) => {
      if (err) return res.status(500).send({ err });
      if (!user)
        return res.status(501).send({ error: "Couldn't find the user" });

      // remove password from user.
      // mongoose return unnecessary data with object so convert it in to json.
      const { password, ...rest } = Object.assign({}, user.json());

      return res.status(201).send(user);
    });
  } catch (error) {
    return res.status(404).send({ error: "Cannot Find User Data" });
  }
}

/** PUT: http://localhost:8080/api/updateUser
@param: {
    "id": "<userId>"
}
body {
    "firstName": "",
    "address": "",
    "profile": ""
}
*/
export async function updateUser(req, res) {
  try {
    const id = req.query.id;
    const { userId } = req.user;

    if (userId) {
      const body = req.body;

      // update the data.
      userModel.updateOne({ _id: userId }, body, (err, data) => {
        if (err) throw err;
        return res.status(201).send({ msg: "Record updated ...!" });
      });
    } else {
      return res.status(401).send({ error: "User Not Found ...!" });
    }
  } catch (error) {
    return res.status(401).send({ error });
  }
}

/** GET: http://localhost:8080/api/generateOTP */
export async function generateOTP(req, res) {
  res.json("generateOTP route");
}

/** GET: http://localhost:8080/api/verifyOTP */
export async function verifyOTP(req, res) {
  res.json("verifyOTP route");
}

// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req, res) {
  res.json("createResetSession route");
}

// update the password when we have valid session.
/** PUT: http://localhost:8080/api/resetPassword */
export async function resetPassword(req, res) {
  res.json("resetPassword route");
}
