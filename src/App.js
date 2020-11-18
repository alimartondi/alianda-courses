import "./App.css";
import NavBar from "./components/Navbar";
import BannerSection from "./components/Banner";
import EventsSection from "./components/Events";
import WishSection from "./components/Wish";
import ProgramsSection from "./components/Programs";
import Footer from "./components/Footer";
import RegisterSection from "./components/Register";
import PartnerSlider from "./components/Partner";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerSection />
      <WishSection />
      <EventsSection />
      <ProgramsSection />
      <PartnerSlider />
      <RegisterSection />
      <Footer />
    </div>
  );
}

export default App;
