import "./App.css";
import Loginsignup from "./components/Loginsignup.js/Loginsignup";
import { Routes, Route, Router } from "react-router-dom";
import Hotels from "./components/Hotels";
import Footer from "./components/Footer";
import Room from "./components/Pages/Chooseroom";
import Dining from "./components/Pages/Dining";
import Specialevents from "./components/Pages/Specialevents";
import Error from "./components/Pages/ErorrPage";
import Updaterooms from "./admin/adminpages/Updaterooms";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./admin/adminpanel/Sidebar";
import Updateemployee from "./admin/adminpages/Updateemployee";
import Services from "./contextapi/Services";
import Roomdetails from "./components/Pages/Roomdetails";
// import { useNavigate } from 'react-router-dom';
import PrivateRouting from "./components/PrivateRouting";


function App() {
  return (
      <Services>
        <Navbar />
        <Routes>
          <Route element={<Hotels />} path="/" />
          <Route element={<Dining />}  path="/dining"/>
          <Route element={<Room />} path="/room" />
          <Route path="*" element={<Error/>}/>
          <Route element={<PrivateRouting/>}>
          <Route element={<Specialevents />}  path="/specialevents"/>
          <Route element={<Roomdetails />} path="/roomdetails" />
          <Route element={<Updateemployee />}  path="/updateemployee/:id"/>
          <Route element={<Updaterooms />} path="/updaterooms/:id" />
          <Route element={<Sidebar />} path="/sidebar/*" />
          </Route>
          <Route element={<Loginsignup />} path="/loginsignup" />
        </Routes>
        <Footer />
      </Services>
  );
}
// function App2(){
//   return(
// <div>
//     <Routes>
//     <Route element={<Sidebar />} path="/sidebar/*" />
//   </Routes>
// </div>
//   )
//   }
  export default App;
// export {App2};