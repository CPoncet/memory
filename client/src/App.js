import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Game from './pages/game';
import HallOfFame from './pages/hallOfFame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/hof" element={<HallOfFame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
