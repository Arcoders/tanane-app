import { Routes, Route, HashRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import PokemonDetail from "./components/PokemonDetail";
import Home from "./components/Home";

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:pokeId" element={<PokemonDetail />} />
        </Routes>
        </QueryClientProvider>
    </Router>
  );
}

export default App
