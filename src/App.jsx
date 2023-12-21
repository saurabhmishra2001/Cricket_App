import React from 'react'
import "./styles/App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Main/Home'

// import MatchDetails from "./components/MatchDetails";
// import MatchInfo from "./components/MatchesDetails/matchData.jsx";
// import Schedule from "./components/Home/Schedule";
// import News from "./components/Home/News";
// import TopNewsDetails from "./components/TopNewsDetails.jsx";
function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />

          <Route path="/matchDetails/:id" element={<MatchDetails />} />
          <Route path="/:type/:id" element={<MatchInfo />} />
          <Route path="/news/:id" element={<TopNewsDetails/>} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App