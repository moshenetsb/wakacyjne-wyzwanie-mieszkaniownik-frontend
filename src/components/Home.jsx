function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-center text-blue-950 font-bold text-3xl tracking-wider">
        Witamy w MIESZKANIOWNIKU!
      </h1>
      <p className="text-center text-blue-950 text-xl">
        Twój klucz do studenckiego mieszkania
      </p>
      <button
        className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300"
        onClick={() => (window.location.href = "/login")}
      >
        Zacznij teraz
      </button>
    </div>
  );
}

export default Home;
