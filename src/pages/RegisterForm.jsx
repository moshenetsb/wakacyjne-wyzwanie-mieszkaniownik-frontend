import logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import useUser from "../context/UserContext/useUser";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";
import PasswordField from "../components/PasswordField";
import Button from "../components/Button";
import { authRegister } from "../api/api";

function RegisterForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, login } = useUser();
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/profile", { replace: true });
    }
  }, [user, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    const formData = new FormData(event.target);

    if (formData.get("password") !== formData.get("passwordRepeat")) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
      role: "USER",
      username: formData.get("username"),
      name: formData.get("name"),
      surname: formData.get("surname"),
      phone: formData.get("phone") || null,
      city: formData.get("city"),
      googleId: null,
    };

    const newUserData = await authRegister(userData);
    if (newUserData) {
      login(newUserData);
      navigate("/profile", { replace: true });
    }

    setLoading(false);
  }

  return (
    <main className="w-full flex justify-center items-center flex-col p-5">
      <div className="flex flex-col gap-8 items-start w-full max-w-350">
        <button
          className="flex items-center gap-2 text-blue-950 hover:text-blue-700 transition-colors duration-300"
          onClick={() => navigate("/")}
        >
          <ArrowUpIcon className="rotate-[-90deg]" />
          Powrót do strony głównej
        </button>
      </div>
      <div className="flex flex-col justify-center items-center max-w-md w-full gap-1 p-4 h-auto">
        <div className="flex flex-col items-center gap-1 p-4 w-full">
          <img
            src={logo}
            alt="Logo strony Mieszkaniownik"
            width={80}
            height={80}
            className="bg-transparent"
          />
          <span className="text-center text-blue-950 font-bold text-2xl tracking-wider">
            Mieszkaniownik
          </span>
          <p className="text-center text-blue-950 text-base">
            Twój klucz do studenckiego mieszkania
          </p>
        </div>

        <form
          className="flex flex-col gap-6 w-full border-gray-200 rounded-xl border p-4 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="gap-1 flex flex-col">
            <h1 className="font-semibold text-xl text-blue-950 ">
              Rejestracja
            </h1>
            <p className="text-gray-500 text-sm">
              Wypełnij formularz, aby utworzyć konto
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-blue-950">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-lg border-solid border-1 border-gray-300 p-2"
              required={true}
              placeholder="email@example.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="font-medium text-blue-950">
              Nazwa użytkownika:
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="w-full rounded-lg border-solid border-1 border-gray-300 p-2"
              required={true}
              placeholder="Podaj nazwę użytkownika"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium text-blue-950">
              Imię:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-lg border-solid border-1 border-gray-300 p-2"
              required={true}
              placeholder="Jan"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="surname" className="font-medium text-blue-950">
              Nazwisko:
            </label>
            <input
              id="surname"
              name="surname"
              type="text"
              className="w-full rounded-lg border-solid border-1 border-gray-300 p-2"
              required={true}
              placeholder="Nowak"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="font-medium text-blue-950">
              Numer telefonu:
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full rounded-lg border-solid border-1 border-gray-300 p-2"
              placeholder="Podaj numer telefonu"
              pattern="[0-9+*#]*"
              title="Dozwolone znaki: cyfry, +, * i #"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="font-medium text-blue-950">
              Nazwa miasta:
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="w-full rounded-lg border-solid border-1 border-gray-300 p-2"
              required={true}
              placeholder="Podaj miasto"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium text-blue-950">
              Hasło:
            </label>
            <PasswordField error={passwordError} />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="passwordRepeat"
              className="font-medium text-blue-950"
            >
              Powtórz hasło:
            </label>
            <PasswordField
              id="passwordRepeat"
              name="passwordRepeat"
              placeholder="Powtórz hasło"
              error={passwordError}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Button
              type="submit"
              loading={loading}
              className="w-full cursor-pointer"
            >
              Zarejestruj się
            </Button>

            <p className="text-gray-500 text-sm text-right w-full">
              Już masz konto?{" "}
              <Link
                to="/login"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Zarejestruj się
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default RegisterForm;
