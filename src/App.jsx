import "./App.css";
import Create from "./views/create/create.component";
import Detail from "./views/detail/detail.component";
import Home from "./views/home/home.component";
import Landing from "./views/landing/landing.component";
import Nav from "./components/nav/nav.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Nav/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
        <Route path="/" element={<Landing className="landing"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
