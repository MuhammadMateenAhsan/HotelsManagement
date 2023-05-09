import "./App.css";
import Loginsignup from "./components/Loginsignup.js/Loginsignup";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hotels from "./components/Hotels";
import Footer from "./components/Footer";
import Room from "./components/Pages/Chooseroom";
import Dining from "./components/Pages/Dining";
import Specialevents from "./components/Pages/Specialevents";
import Addrooms from "./admin/adminpages/Addrooms";
import Adminsidebar from "./admin/adminpanel/Adminsidebar";
import Showrooms from "./admin/adminpages/Showrooms";
import Updaterooms from "./admin/adminpages/Updaterooms";
import Addemployee from "./admin/adminpages/Addemployee";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./admin/adminpanel/Sidebar";
import Showemployee from "./admin/adminpages/Showemployee";
import Updateemployee from "./admin/adminpages/Updateemployee";
import Services from "./contextapi/Services";
import Roomdetails from "./components/Pages/Roomdetails";
// import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Services>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hotels />} />
          <Route path="/room" element={<Room />} />
          <Route path="/roomdetails" element={<Roomdetails />} />
          <Route path="/updateemployee/:id" element={<Updateemployee />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/specialevents" element={<Specialevents />} />
          <Route path="/loginsignup" element={<Loginsignup />} />
          <Route path="/adminsidebar" element={<Adminsidebar />} />
          <Route path="/updaterooms/:id" element={<Updaterooms />} />
          <Route path="/sidebar/*" element={<Sidebar />}/>
            {/* <Route path="addrooms" element={<Addrooms />} />
            <Route path="showrooms" element={<Showrooms />} />
            <Route path="showemployee" element={<Showemployee />} />
            <Route path="addemployee" element={<Addemployee />} /> */}
          {/* </Route> */}
        </Routes>
        <Footer />
      </Services>
    </Router>
  );
}

export default App;
