import jwt from "jsonwebtoken";

// HTTP JWT middleware (already used by the /api/me route).
// You will write a SEPARATE version of this for Socket.io in server.js,
// reading the token from socket.handshake.auth.token instead of the header.
export function verifyToken(req, res, next) {
  const auth = req.headers.authorization ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) return res.status(401).json({ error: "No token" });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}
