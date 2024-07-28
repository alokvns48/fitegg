import { BrowserRouter } from "react-router-dom";
import AboutUsSection from "./components/AboutUsSection";
import BenefitsSection from "./components/BenefitsSection";
import BetterSection from "./components/BetterSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";


function App() {
  return (
    <BrowserRouter>
      <HomePage />
      <AboutUsSection/>
      <BenefitsSection/>
      <BetterSection/>
      <ContactUsSection/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
