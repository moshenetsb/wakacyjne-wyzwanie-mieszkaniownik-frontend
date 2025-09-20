import { useNavigate } from "react-router-dom";
import useUser from "../context/UserContext/useUser";
import { useEffect, useState } from "react";

function ProfilePage() {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  const [email, setEmail] = useState(user?.email || "");
  const [name, setName] = useState(user?.name || "");
  const [surname, setSurname] = useState(user?.surname || "");

  if (!user) return null;

  function handleSave(e) {
    e.preventDefault();
    if (!window.confirm("Czy na pewno chcesz zaktualizować dane konta?"))
      return;

    // tutaj API do zapisu zmian
    alert("Dane zapisane!");
  }

  function handleDeactivate() {
    if (!window.confirm("Czy na pewno chcesz dezaktywować konto?")) return;

    // dezaktywacja konta przez API

    alert("Konto zostało dezaktywowane.");
    logout();
  }

  return (
    <div className="max-w-sm mx-auto mt-4">
      <h1 className="text-center text-blue-950 font-bold text-2xl tracking-wider mb-6">
        Twoje konto
      </h1>

      <form className="flex flex-col gap-4 " onSubmit={handleSave}>
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border-solid border-1 border-gray-400 p-2"
          required={true}
        />

        <label className="font-semibold" htmlFor="name">
          Imię
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border-solid border-1 border-gray-400 p-2"
          required={true}
        />

        <label className="font-semibold" htmlFor="surname">
          Nazwisko
        </label>
        <input
          id="surname"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="rounded-lg border-solid border-1 border-gray-400 p-2"
          required={true}
        />

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Zapisz zmiany
          </button>
          <button
            type="button"
            onClick={handleDeactivate}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Dezaktywuj konto
          </button>
        </div>
      </form>

      <p className="mt-4 text-gray-500 text-sm ">
        Rola: {user.role} | Konto utworzone:{" "}
        <time dateTime={user.created_at}>
          {new Date(user.created_at).toLocaleDateString()}
        </time>
      </p>
    </div>
  );
}

export default ProfilePage;
