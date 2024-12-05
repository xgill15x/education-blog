import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Authority from "./components/Authority";
import Reproduction from "./components/Reproduction";
import Resources from "./components/Resources";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollNavigationButtons from "./components/ScrollNavigationButtons";
import BackgroundImage from "./images/classroom-background.jpg";

function App() {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${BackgroundImage})`,
        }}
      >
        <Header />
        <Hero />
      </div>
      <Reproduction />
      <Authority />
      <Resources />
      <About />
      <Footer />
      <ScrollNavigationButtons />
    </div>
  );
}

export default App;
