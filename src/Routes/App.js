import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import LoginComp from "../Components/LoginComp";
import Perfil from "../Containers/Perfil";

const AppRouter = () => {
   
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginComp/>} />
     <Route path="/home" element={<Home/>} />
     <Route path="/perfil" element={<Perfil/>} />
    
    </Routes>
     </BrowserRouter>
  );
};

export default AppRouter;
