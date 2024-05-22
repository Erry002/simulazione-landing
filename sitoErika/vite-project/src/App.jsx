/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Recensioni from "./pages/Recensioni";

import Form from "./pages/EmailRestAPI";
import Error from "./pages/Error";
import Footer from "./components/Footer";

/* tutti gli import file dei progetti */



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/recensioni" element={<Recensioni />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
