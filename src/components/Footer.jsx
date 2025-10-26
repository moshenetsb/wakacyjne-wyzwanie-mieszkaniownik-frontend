import { HomeIcon, MailIcon, MessageCircleIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="flex w-full flex-col gap-6 bg-blue-950 p-8 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <HomeIcon size={24} />
              <h3 className="text-xl font-bold">MIESZKANIOWNIK</h3>
            </div>
            <p className="text-sm text-gray-300">
              Twój klucz do studenckiego mieszkania. Znajdź wymarzone mieszkanie
              szybciej niż kiedykolwiek.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Szybkie linki</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://discord.gg/W2SCjUYXCe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
              >
                <MessageCircleIcon size={16} />
                Serwer Discord
              </a>
              <a
                href="mailto:mieszkaniownik@gmail.com"
                className="flex items-center gap-2 underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
              >
                <MailIcon size={16} />
                Kontakt Email
              </a>
              <a
                href="https://discord.com/oauth2/authorize?client_id=1422117898389819532&scope=bot&permissions=268435456"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
              >
                Dodaj Discord Bota
              </a>
            </div>
          </div>

          {/* Team Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Zespół</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div>
                <span className="font-medium">Frontend: </span>
                <a
                  href="https://github.com/moshenetsb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
                >
                  @moshenetsb
                </a>
                ,{" "}
                <a
                  href="https://github.com/wsparcie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
                >
                  @wsparcie
                </a>
              </div>
              <div>
                <span className="font-medium">Backend: </span>
                <a
                  href="https://github.com/Drake3001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
                >
                  @Drake3001
                </a>
                ,{" "}
                <a
                  href="https://github.com/wsparcie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
                >
                  @wsparcie
                </a>
                ,{" "}
                <a
                  href="https://github.com/ptakj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
                >
                  @ptakj
                </a>
              </div>
              <div>
                <span className="font-medium">PM: </span>
                <a
                  href="https://github.com/StudentSkunek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-gray-300 hover:underline"
                >
                  @StudentSkunek
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-300">
          <p>&copy; 2025 MIESZKANIOWNIK – Zrobione w czasie Solvro Wakacyjne Wyzwanie 2025</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
