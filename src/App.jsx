import { BrowserRouter } from "react-router-dom";
import AboutUsSection from "./components/AboutUsSection";
import BenefitsSection from "./components/BenefitsSection";
import BetterSection from "./components/BetterSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch or some initialization
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Replace this with actual data fetching logic
  }, []);

  if (loading) {
    return <Loader />;
  }
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
