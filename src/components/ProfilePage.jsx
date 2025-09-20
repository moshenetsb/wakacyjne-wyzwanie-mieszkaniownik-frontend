import { useNavigate } from "react-router-dom";
import useUser from "../context/UserContext/useUser";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api/api";

function ProfilePage() {
  const navigate = useNavigate();
  const { user, login } = useUser();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  const [email, setEmail] = useState(user?.email || "");
  const [name, setName] = useState(user?.name || "");
  const [surname, setSurname] = useState(user?.surname || "");

  if (!user) return null;

  async function handleSave(e) {
    e.preventDefault();
    if (!window.confirm("Czy na pewno chcesz zaktualizować dane konta?"))
      return;

    const formData = new FormData(e.target);

    const updates = {};
    if (formData.get("email") !== user.email)
      updates.email = formData.get("email");
    if (formData.get("name") !== user.name) updates.name = formData.get("name");
    if (formData.get("surname") !== user.surname)
      updates.surname = formData.get("surname");

    const failedFields = [];

    for (const field in updates) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/user/update/${field}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ [field]: updates[field] }),
          credentials: "include",
        });

        if (!res.ok) throw new Error(`${field} update failed`);
      } catch (err) {
        console.error(err);
        failedFields.push(field);
      }
    }

    if (failedFields.length > 0) {
      alert(`Nie udało się zaktualizować pól: ${failedFields.join(", ")}`);
    } else {
      alert("Dane konta zastały zmienione!");
    }

    const updatedUser = { ...user };

    for (const field in updates) {
      if (!failedFields.includes(field)) {
        updatedUser[field] = updates[field];
      }
    }
    login(updatedUser);
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
