const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({ message: "Unauthorized " });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Unauthorized " });
  }
};

module.exports = authMiddleware;
