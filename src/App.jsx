import UserProvider from "./context/UserContext/UserProvider";
import LoginForm from "./pages/LoginForm";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ErrorFallback from "./components/ErrorFallback";
import Profile from "./components/ProfilePage";
import RegisterForm from "./pages/RegisterForm";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <UserProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </UserProvider>
    </Router>
  );
}

export default App;
