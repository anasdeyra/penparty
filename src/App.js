import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import HeaderAction from "./components/HeaderAction";
import Contact from "./Pages/Contact";
import LandingPage from "./Pages/LandingPage";
import { useContext } from "react";
import authContext from "./contextes/authContext";
import Dashboard from "./Pages/Dashboard";

const links = [
  { link: "/schedule", label: "Schedule" },
  { link: "/contact", label: "Contact" },
  { link: "/about", label: "About" },
];

function App() {
  const { user } = useContext(authContext);
  return (
    <BrowserRouter>
      <HeaderAction links={links} />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
