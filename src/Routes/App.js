import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import LoginComp from "../Components/LoginComp";
import RegisterComp from "../Components/Register";
import Perfil from "../Containers/Perfil";

const AppRouter = () => {
   
  return (
   <BrowserRouter>
    <Routes>
      
     <Route path="/" element={<Home/>} />
     <Route path="/perfil" element={<Perfil/>} />
     <Route path="/login" element={<LoginComp/>} />
     <Route path="/register" element={<RegisterComp/>} />
    
    </Routes>
     </BrowserRouter>
  );
};

export default AppRouter;
