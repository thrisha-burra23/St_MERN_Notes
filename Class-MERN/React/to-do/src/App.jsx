import Header from "./Header";
import Hero from "./Hero";
import TrustedBrands from "./TrustedBrands";
import Services from "./Services";
import Footer from "./Footer";
import GetJoke from "./GetJoke";

function App() {
  const trustedBrands = [
    {
      id: 1,
      logo: "st",
    },
    {
      id: 2,
      logo: "ryzer",
    },
    {
      id: 3,
      logo: "google",
    },
  ];
  return (
    <>
      <Header />
      <Hero />
      <TrustedBrands trustedBrands={trustedBrands}/>
      <Services />
      <Footer />

      <GetJoke/>
    </>
  );
}

export default App;
