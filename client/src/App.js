import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/mainLayout';
import Home from './pages';
import Game from './pages/game';
import HallOfFame from './pages/hallOfFame';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/hof" element={<HallOfFame />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
