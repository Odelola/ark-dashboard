import { Routes, Route } from "react-router-dom"
import { Header, SideBar, BidPanel, Patronise } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main">
        <SideBar />
          <Routes>
            <Route path="/" element={<BidPanel />} />
            <Route path="/patronise" element={<Patronise />} />
          </Routes>
      </main>
    </div>
  );
}

export default App;
