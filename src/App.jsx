import UserProvider from "./context/UserContext/UserProvider";
import LoginForm from "./components/LoginForm";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ErrorFallback from "./components/ErrorFallback";
import Profile from "./components/ProfilePage";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Navigation />

          <main className="w-full flex justify-center flex-grow min-h-[80vh]">
            <Routes>
              <Route path="/" element={<div>Home</div>} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </ErrorBoundary>
      </Router>
    </UserProvider>
  );
}

export default App;
