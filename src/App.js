import {  Routes, Route } from "react-router-dom";
import CatsListing from "./CatsListing";
import RandomJokes from "./RandomJokes";
import RandomUser from "./RandomUser";
import Home from "./Home";
function App() {
  return (
  
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/users" element={<RandomUser />} />
     <Route path="/jokes" element={<RandomJokes/>} />
     <Route path="/cats" element={<CatsListing/>} />
   </Routes>
 
  );
}

export default App;
