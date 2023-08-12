import "./App.css";
import Create from "./views/create/create.component";
import Detail from "./views/detail/detail.component";
import Home from "./views/home/home.component";
import Landing from "./views/landing/landing.component";
import Nav from "./components/nav/nav.component";
import { Routes, Route, useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  return (
    <div >
      {location.pathname !== "/" && <Nav/>}
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
