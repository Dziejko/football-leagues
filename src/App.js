import { Route, Routes, HashRouter } from "react-router-dom";
import Leagues from "./pages/Leagues";
import Team from "./pages/League";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Leagues />} />
        <Route path="/football-leagues" element={<Leagues />} />
        <Route path="/football-leagues/league/:id" element={<Team />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
