import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ServicesOffered from "./pages/servicesOffered";
import SurgicalAsthetics from "./pages/surgicalAsthetics";
import NonSurgicalAsthetics from "./pages/nonSurgicalAsthetics";
import ForMen from "./pages/forMen";
import Dentist from "./pages/dentist";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Transportation from "./pages/transportation";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import BookAppointment from "./pages/BookAppointment";
import TermsAndCondition from './pages/termsandcondition'
import Privacaypolicy from './pages/privacaypolicy'
import Profile from "./pages/myProfile/index";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/elite-care" element={<Home />} />
        <Route path="/elite-care/about-us" element={<About />} />
        <Route
          path="/elite-care/services-offered"
          element={<ServicesOffered />}
        />
        <Route
          path="/elite-care/surgical-asthetics"
          element={<SurgicalAsthetics />}
        />
        <Route
          path="/elite-care/non-surgical-asthetics"
          element={<NonSurgicalAsthetics />}
        />
        <Route path="/elite-care/for-men" element={<ForMen />} />
        <Route path="/elite-care/dentist" element={<Dentist />} />
        <Route path="/elite-care/contact-us" element={<Contact />} />
        <Route path="/elite-care/blog" element={<Blog />} />
        <Route path="/elite-care/transportation" element={<Transportation />} />
        <Route path="/elite-care/login" element={<Login />} />
        <Route path="/elite-care/register" element={<Register />} />
        <Route
          path="/elite-care/book-appointment"
          element={<BookAppointment />}
        />
        <Route path="/elite-care/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/elite-care/privacypolicy" element={<Privacaypolicy />} />
        <Route path="/elite-care/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
