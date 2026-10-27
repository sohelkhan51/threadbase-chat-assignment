import { useCallback, useState } from "react";
import { useAuth } from "../auth/AuthContext.jsx";
// Task: npm install socket.io-client, then:  import { io } from "socket.io-client";

// TODO (Tasks 3-4): implement the live socket connection.
//
// export function useSocket(roomId) {
//   const { token } = useAuth();
//   const [messages, setMessages] = useState([]);
//   const [socket, setSocket] = useState(null);
//
//   useEffect(() => {
//     if (!token) return;
//     const s = io(import.meta.env.VITE_SOCKET_URL, { auth: { token } }); // token -> handshake.auth.token
//     setSocket(s);
//     s.emit("room:join", roomId);
//     const onMessage = (msg) => setMessages((prev) => [...prev, msg]);
//     s.on("chat:message", onMessage);
//     return () => {
//       s.off("chat:message", onMessage);   // remove THIS listener
//       s.disconnect();                     // close the connection
//     };
//   }, [token, roomId]);
//
//   const sendMessage = useCallback(
//     (text) => socket?.emit("chat:message", { roomId, text }),
//     [socket, roomId]
//   );
//
//   return { messages, sendMessage };
// }

// Placeholder so the app runs before you implement the hook.
// Replace this whole function with the real implementation above.
export function useSocket(roomId) {
  useAuth(); // token is available here via useAuth().token
  const [messages] = useState([]);
  const sendMessage = useCallback((text) => {
    console.log("sendMessage not wired yet:", roomId, text);
  }, [roomId]);
  return { messages, sendMessage };
}
