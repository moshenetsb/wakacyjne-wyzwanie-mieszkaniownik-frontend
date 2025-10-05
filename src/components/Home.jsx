import backgroundImage from "../assets/home-background.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex flex-col gap-8 items-center justify-center bg-cover min-h-screen p-8"
    >
      <h1 className="text-center text-blue-950 font-bold text-3xl tracking-wider">
        Witamy w MIESZKANIOWNIKU!
      </h1>
      <p className="text-center text-blue-950 text-xl">
        Twój klucz do studenckiego mieszkania
      </p>
      <button
        className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300"
        onClick={() => navigate("/login")}
      >
        Zacznij teraz
      </button>
    </div>
  );
}

export default Home;
