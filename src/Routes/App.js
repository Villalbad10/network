import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Components/Home";
import LoginComp from "../Components/LoginComp";
import Register from "../Components/Register";
import Perfil from "../Containers/Perfil";

const AppRouter = () => {
   
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginComp/>} />
     <Route path="/home" element={<Home/>} />
     <Route path="/perfil" element={<Perfil/>} />
     <Route path="/login" element={<LoginComp/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
     </BrowserRouter>
  );
};

export default AppRouter;
