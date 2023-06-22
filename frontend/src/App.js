import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PrivateComp from "./components/PrivateComp";
import ManageStudents from "./components/ManageStudents";
function App() {
  const auth = localStorage.getItem('academic');
  return (
    <>
      <BrowserRouter>
        {auth?<Navbar />:''} 
        <Routes>
          {/* Rotes for sidebar */}
          <Route element={<PrivateComp />}>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Home />}></Route>
            <Route path="/manage_students" element={<ManageStudents/>}></Route>
            {/* routes for navbar */}
            <Route path="/about" element={<h1>About</h1>}></Route>
          </Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
