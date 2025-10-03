import Footer from "../components/Footer";
import Home from "../components/Home";
import Navigation from "../components/Navigation";

function HomePage() {
  return (
    <>
      <Navigation />
      <main className="w-full flex justify-center flex-grow flex-col min-h-[80vh] p-5">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
