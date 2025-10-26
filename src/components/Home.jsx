import {
  BellIcon,
  HomeIcon,
  UserIcon,
  ZapIcon,
  ArmchairIcon,
  CircleDollarSignIcon,
  SearchIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../assets/home-background.png";
import useUser from "../context/UserContext/useUser";

function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  function handleOnClick() {
    if (user) navigate("/dashboard");
    else navigate("/login");
  }

  return (
    <>
      <section
        className="relative flex h-[90dvh] w-full flex-col items-center justify-center bg-cover bg-fixed bg-top bg-no-repeat p-8"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <a
            href="https://discord.gg/W2SCjUYXCe"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-blue-600 hover:text-white"
          >
            Dołącz do serwera na Discordzie
          </a>
          <h1 className="text-2xl font-extrabold tracking-wider text-white sm:text-4xl md:text-6xl lg:text-7xl">
            MIESZKANIOWNIK
          </h1>
          <p className="max-w-2xl text-lg text-white sm:text-xl md:text-2xl">
            Znajdziemy Ci mieszkaniową perełkę wśród tysięcy ofert
          </p>
          <button
            onClick={handleOnClick}
            className="rounded-md bg-blue-800 px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-blue-700"
          >
            Wypróbuj za darmo
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center bg-gray-50 px-4 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold text-blue-950 sm:text-4xl md:text-6xl">
          Jak to działa?
        </h2>
        <p className="max-w-2xl text-lg text-gray-700 sm:text-xl">
          Wystarczy, że podasz nam kilka informacji, a my znajdziemy dla Ciebie
          <br />
          <b>najlepsze oferty.</b>
        </p>
      </section>

      <section className="flex w-full flex-col items-center gap-12 bg-white px-4 py-20">
        <h2 className="mb-12 text-center text-2xl font-bold text-blue-950 sm:text-4xl">
          Nasze funkcje
        </h2>
        <div className="grid w-full max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl border bg-white p-6 text-center shadow transition hover:shadow-lg">
            <HomeIcon size={48} className="mb-4 text-blue-950" />
            <h3 className="mb-2 text-xl font-semibold">Pół-darmo</h3>
            <p className="text-gray-600">
              Mieszkania nawet o połowę mniej od ceny rynkowej.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl border bg-white p-6 text-center shadow transition hover:shadow-lg">
            <BellIcon size={48} className="mb-4 text-blue-950" />
            <h3 className="mb-2 text-xl font-semibold">Discord</h3>
            <p className="text-gray-600">
              Wszystko możesz obsłużyć na naszym lub swoim serwerze Discord.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl border bg-white p-6 text-center shadow transition hover:shadow-lg">
            <ZapIcon size={48} className="mb-4 text-blue-950" />
            <h3 className="mb-2 text-xl font-semibold">Szybkość</h3>
            <p className="text-gray-600">
              Gwarantujemy, że będziesz pierwszą z osób, które zobaczą daną
              ofertę.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl border bg-white p-6 text-center shadow transition hover:shadow-lg">
            <ArmchairIcon size={48} className="mb-4 text-blue-950" />
            <h3 className="mb-2 text-xl font-semibold">Wygoda</h3>
            <p className="text-gray-600">
              Siedź wygodnie i czekaj na oferty. My się zajmiemy resztą.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl border bg-white p-6 text-center shadow transition hover:shadow-lg">
            <CircleDollarSignIcon size={48} className="mb-4 text-blue-950" />
            <h3 className="mb-2 text-xl font-semibold">Cena</h3>
            <p className="text-gray-600">
              Jesteśmy w fazie beta, więc wszystko jest za darmo ;)
            </p>
          </div>
          <div className="flex flex-col items-center rounded-xl border bg-white p-6 text-center shadow transition hover:shadow-lg">
            <SearchIcon size={48} className="mb-4 text-blue-950" />
            <h3 className="mb-2 text-xl font-semibold">Nic nie przegapisz</h3>
            <p className="text-gray-600">
              Mamy oferty z najpopularniejszych portali ogłoszeniowych w Polsce.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="mb-4 text-lg text-gray-700 sm:text-xl">
            Na co czekasz?
          </p>
          <button
            onClick={handleOnClick}
            className="rounded-md bg-blue-800 px-8 py-3 text-lg font-medium text-white transition duration-300 hover:bg-blue-700"
          >
            Wypróbuj za darmo
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center bg-gray-50 px-4 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold text-blue-950 sm:text-4xl md:text-6xl">
          Od studentów dla studentów
        </h2>
        <p className="max-w-3xl text-lg text-gray-700 sm:text-xl">
          Rozumiemy, jak trudne może być znalezienie mieszkania. Dlatego
          stworzyliśmy MIESZKANIOWNIK - narzędzie, które oszczędzi Twój czas i
          stres związany z poszukiwaniem mieszkania.
        </p>
        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-5xl font-bold text-blue-950">⏱</div>
            <h3 className="mb-2 text-2xl font-semibold text-blue-950">
              Zaoszczędź czas
            </h3>
            <p className="text-gray-700">
              Automatyczne monitorowanie ofert zamiast ręcznego odświeżania
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 text-5xl font-bold text-blue-950"></div>
            <h3 className="mb-2 text-2xl font-semibold text-blue-950">
              Szybsze znalezienie
            </h3>
            <p className="text-gray-700">
              Natychmiastowe powiadomienia o nowych ofertach
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 text-5xl font-bold text-blue-950"></div>
            <h3 className="mb-2 text-2xl font-semibold text-blue-950">
              Więcej ofert
            </h3>
            <p className="text-gray-700">
              Agregacja z wielu źródeł w jednym miejscu
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 text-5xl font-bold text-blue-950"></div>
            <h3 className="mb-2 text-2xl font-semibold text-blue-950">
              Mniej stresu
            </h3>
            <p className="text-gray-700">
              Żadnego strachu związanego z poszukiwaniem mieszkania
            </p>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-center bg-blue-900 px-4 py-20 text-white">
        <h2 className="mb-6 text-center text-2xl font-bold sm:text-4xl">
          Gotowy, aby znaleźć swoje mieszkanie?
        </h2>
        <button
          onClick={handleOnClick}
          className="rounded-md bg-white px-8 py-3 text-blue-950 transition duration-300 hover:bg-gray-200"
        >
          Zacznij teraz
        </button>
      </section>
    </>
  );
}

export default Home;
