import ThingsYouNeed from "./components/ThingsYouNeed";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navibar from "./components/Navibar";
import Destination from "./components/Destination";
import Subscribe from "./components/Subscribe";
import "./App.css";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div>
      <Navibar />
      <Hero />
      <ThingsYouNeed />
      <Destination />
      <AboutUs />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
