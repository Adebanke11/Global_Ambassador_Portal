import ScrollToTop from "./components/ScrollToTop";
import ResponsiveNav  from "./components/navbar";
import Hero from "./components/hero";
import Programs from "./components/Program";
import ProgramProcess from "./components/programProcess";
import PerformanceTiers from "./components/Tiers";
import AmbassadorRoles from "./components/ambassador";
import Eligibility from "./components/Eligibility";
import FinalCTA from "./components/FinalCTA";
import PartnerInstitution from "./components/partner";
import FAQ from "./components/Faq";
import { Import } from "lucide-react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import Footer from "./components/Footer";



function App () {
  return(
    <Router>
      <ScrollToTop />
      {/* <ResponsiveNav /> */}
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partner" element={<PartnerInstitution />} />
         <Route 
          path="/" 
          element={
            <>
<ResponsiveNav />
<Hero />
<Programs />
<ProgramProcess />
<PerformanceTiers />
<AmbassadorRoles />
<Eligibility />
<FAQ />
<FinalCTA />
</> }
/>
      </Routes>
      <Footer />
      
    </Router>
 
  );
}

export default App;