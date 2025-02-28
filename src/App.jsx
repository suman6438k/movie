import "./App.css"
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  return <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="movie/:id" element={<h1>movie detail page</h1>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        
      </Routes>
    </Router>
  </div>;
};

export default App;
