import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Pacientes from "./components/Pacientes";
import Lista from "./components/Lista";
import NavBar from "./components/NavBar";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/:id" element={<Pacientes />} />
        <Route />
      </Routes>
    </HashRouter>
  );
}

export default App;
