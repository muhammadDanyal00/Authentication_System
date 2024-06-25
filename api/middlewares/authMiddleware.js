// middleware/auth.js
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: "./config/.env" });
const jwtSecret = process.env.JWT_SECRET_KEY;

function verifyToken(req, res, next) {
  const token = req.cookies.token; // Extract token from cookies

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
}

export default verifyToken;
