import FooterComponent from "./components/Footer.Component";
import NavbarComponent from "./components/Navbar.Component";
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/Home.Page";
import FaqPage from "./pages/Faq.Page";
import AboutUsPage from "./pages/AboutUs.Page";
import ContactUspage from "./pages/ContactUs.page";

function App() {
  return (
    <div>
      {/* navbar */}
      <NavbarComponent />
      {/* wrapper */}
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUspage />} />
        </Routes>
      </div>
      {/* footer */}
      <FooterComponent />
    </div>
  );
};

export default App;
