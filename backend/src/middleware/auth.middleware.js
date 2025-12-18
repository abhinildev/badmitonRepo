import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  console.log("AUTH HEADER:", req.headers.authorization);

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log(" No token");
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    console.log("✅ DECODED USER:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(" JWT VERIFY FAILED");
    return res.status(403).json({ message: "Invalid token" });
  }
};


export default authMiddleware;