import {
  BellIcon,
  HomeIcon,
  ZapIcon,
  ArmchairIcon,
  CircleDollarSignIcon,
  SearchIcon,
  Clock,
  Zap,
  TrendingUp,
  SmileIcon,
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
    <main className="w-full">
      {/* Hero Section */}
      <section
        className="relative mt-16 flex min-h-[85vh] w-full flex-col items-center justify-center bg-cover bg-fixed bg-top bg-no-repeat p-8"
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
          <h1 className="text-3xl font-extrabold tracking-wider text-white sm:text-5xl md:text-6xl lg:text-7xl">
            MIESZKANIOWNIK
          </h1>
          <p className="max-w-2xl text-lg text-white sm:text-xl md:text-2xl">
            Znajdziemy Ci mieszkaniową perełkę wśród tysięcy ofert
          </p>
          <button
            onClick={handleOnClick}
            className="mt-4 rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white transition hover:bg-blue-700"
          >
            Wypróbuj za darmo
          </button>
        </div>
      </section>

      {/* How it works Section */}
      <section className="flex flex-col items-center bg-gray-50 px-4 py-16 text-center md:py-20">
        <div className="w-full max-w-7xl">
          <h2 className="mb-6 text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl">
            Jak to działa?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 sm:text-xl">
            Wystarczy, że podasz nam kilka informacji, a my znajdziemy dla Ciebie
            <br />
            <b>najlepsze oferty.</b>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex w-full flex-col items-center gap-8 bg-white px-4 py-16 md:py-20">
        <div className="w-full max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-blue-950 sm:text-4xl">
            Nasze funkcje
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
              <HomeIcon size={48} className="mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-semibold text-blue-950">
                Pół-darmo
              </h3>
              <p className="text-gray-600">
                Mieszkania nawet o połowę mniej od ceny rynkowej.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
              <BellIcon size={48} className="mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-semibold text-blue-950">
                Discord
              </h3>
              <p className="text-gray-600">
                Wszystko możesz obsłużyć na naszym lub swoim serwerze Discord.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
              <ZapIcon size={48} className="mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-semibold text-blue-950">
                Szybkość
              </h3>
              <p className="text-gray-600">
                Gwarantujemy, że będziesz pierwszą z osób, które zobaczą daną
                ofertę.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
              <ArmchairIcon size={48} className="mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-semibold text-blue-950">
                Wygoda
              </h3>
              <p className="text-gray-600">
                Siedź wygodnie i czekaj na oferty. My się zajmiemy resztą.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
              <CircleDollarSignIcon size={48} className="mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-semibold text-blue-950">
                Cena
              </h3>
              <p className="text-gray-600">
                Jesteśmy w fazie beta, więc wszystko jest za darmo ;)
              </p>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
              <SearchIcon size={48} className="mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-semibold text-blue-950">
                Nic nie przegapisz
              </h3>
              <p className="text-gray-600">
                Mamy oferty z najpopularniejszych portali ogłoszeniowych w Polsce.
              </p>
            </div>
          </div>

          {/* CTA in Features Section */}
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="mb-4 text-lg text-gray-700 sm:text-xl">
              Na co czekasz?
            </p>
            <button
              onClick={handleOnClick}
              className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white transition hover:bg-blue-700"
            >
              Wypróbuj za darmo
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="flex flex-col items-center bg-gray-50 px-4 py-16 text-center md:py-20">
        <div className="w-full max-w-7xl">
          <h2 className="mb-6 text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl">
            Od studentów dla studentów
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-700 sm:text-xl">
            Rozumiemy, jak trudne może być znalezienie mieszkania. Dlatego
            stworzyliśmy MIESZKANIOWNIK - narzędzie, które oszczędzi Twój czas i
            stres związany z poszukiwaniem mieszkania.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm">
              <Clock size={48} className="mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-semibold text-blue-950">
                Zaoszczędź czas
              </h3>
              <p className="text-gray-700">
                Automatyczne monitorowanie ofert zamiast ręcznego odświeżania
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm">
              <Zap size={48} className="mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-semibold text-blue-950">
                Szybsze znalezienie
              </h3>
              <p className="text-gray-700">
                Natychmiastowe powiadomienia o nowych ofertach
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm">
              <TrendingUp size={48} className="mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-semibold text-blue-950">
                Więcej ofert
              </h3>
              <p className="text-gray-700">
                Agregacja z wielu źródeł w jednym miejscu
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm">
              <SmileIcon size={48} className="mb-4 text-blue-600" />
              <h3 className="mb-2 text-xl font-semibold text-blue-950">
                Mniej stresu
              </h3>
              <p className="text-gray-700">
                Żadnego strachu związanego z poszukiwaniem mieszkania
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="flex w-full flex-col items-center justify-center bg-blue-900 px-4 py-16 text-white md:py-20">
        <div className="w-full max-w-7xl text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Gotowy, aby znaleźć swoje mieszkanie?
          </h2>
          <button
            onClick={handleOnClick}
            className="rounded-lg bg-white px-8 py-3 font-medium text-blue-950 transition hover:bg-gray-200"
          >
            Zacznij teraz
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
