import { useAuth } from "./auth/AuthContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ChatRoom from "./components/ChatRoom.jsx";

export default function App() {
  const { user, logout } = useAuth();

  if (!user) return <LoginPage />;

  return (
    <div className="app">
      <header className="topbar">
        <span>Logged in as <b>{user.name}</b></span>
        <button onClick={logout}>Log out</button>
      </header>
      <ChatRoom roomId="thread-42" />
    </div>
  );
}
