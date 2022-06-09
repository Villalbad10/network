import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Perfil from "../Containers/Perfil";

const AppRouter = () => {
   
  return (
   <BrowserRouter>
    <Routes>
      
     <Route path="/" element={<Home/>} />
     <Route path="/perfil" element={<Perfil/>} />
    
    </Routes>
     </BrowserRouter>
  );
};

export default AppRouter;
