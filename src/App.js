import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import BannerSection from "./components/Banner";
import EventsSection from "./components/Events";
import WishSection from "./components/Wish";
import ProgramsSection from "./components/Programs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerSection />
      <WishSection />
      <EventsSection />
      <ProgramsSection />
      <Footer />
    </div>
  );
}

export default App;
