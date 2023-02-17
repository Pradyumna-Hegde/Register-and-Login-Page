import jwt from "jsonwebtoken";
import { ENV } from "dotenv/config";

// auth middleware.
export default async function auth(req, res, next) {
  try {
    // access authorize header to validate request
    const token = req.headers.authorization.split(" ")[1];

    // retrive the user details for the logged in user.
    const decodedToken = jwt.verify(token, ENV.JWT_SECRET);
    req.user = decodedToken;
    res.json(token);
  } catch (error) {
    res.status(401).json({ error: "Authentication Failed!" });
  }
}
