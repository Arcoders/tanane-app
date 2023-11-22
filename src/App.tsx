import { Routes, Route, HashRouter as Router } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/:pokeId" element={<PokemonDetail />} />
        </Routes>
    </Router>
  );
}

export default App
