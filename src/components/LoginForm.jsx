import logo from "../assets/logo.png";

function LoginForm() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 max-w-sm mx-auto h-screen">
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

      <form className="flex flex-col gap-3 w-full">
        <label htmlFor="login">Login:</label>
        <input
          id="login"
          name="login"
          type="text"
          className="rounded-lg border-solid border-1 border-gray-400 p-2"
        />

        <label htmlFor="password">Hasło:</label>
        <input
          id="password"
          name="password"
          type="password"
          className="rounded-lg border-solid border-1 border-gray-400 p-2"
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
