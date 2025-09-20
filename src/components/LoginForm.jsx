import logo from "../assets/logo.png";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import useUser from "../context/UserContext/useUser";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api/api";

function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, login } = useUser();

  useEffect(() => {
    if (user) {
      navigate("/profile", { replace: true });
    }
  }, [user, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Błąd logowania");
      }

      const userData = await res.json();
      login(userData);
      navigate("/profile", { replace: true });
    } catch (err) {
      alert("Błąd logowania");
      console.error(err);
      navigate("/login", { replace: true });
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col items-center gap-4 p-4 max-w-sm mx-auto h-auto">
      <div className="flex flex-col items-center gap-1 p-4 w-full">
        <img
          src={logo}
          alt="Logo strony Mieszkaniownik"
          width={100}
          height={100}
          className="bg-transparent"
        />
        <h1 className="text-center text-blue-950 font-bold text-2xl tracking-wider">
          Mieszkaniownik
        </h1>
        <p className="text-center text-blue-950 text-base">
          Twój klucz do studenckiego mieszkania
        </p>
      </div>

      <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
        <label htmlFor="email" className="font-semibold">
          Login:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="rounded-lg border-solid border-1 border-gray-400 p-2"
          required={true}
        />

        <label htmlFor="password" className="font-semibold">
          Hasło:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="rounded-lg border-solid border-1 border-gray-400 p-2"
          required={true}
        />
        <button
          type="submit"
          className="rounded-lg border-solid border-1  p-2 text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
        >
          Zaloguj się
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
