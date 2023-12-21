import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Main/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

// import MatchDetails from "./components/MatchDetails";
// import MatchInfo from "./components/MatchesDetails/matchData.jsx";
// import Schedule from "./components/Home/Schedule";
// import News from "./components/Home/News";
// import TopNewsDetails from "./components/TopNewsDetails.jsx";
function App() {
  return (
    <div className="App">

      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />

          <Route path="/matchDetails/:id" element={<MatchDetails />} />
          <Route path="/:type/:id" element={<MatchInfo />} />
          <Route path="/news/:id" element={<TopNewsDetails/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;