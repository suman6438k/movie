import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import MovieList from "./components/MovieList/MovieList";
import MovieDetail from "./pages/MovieDetail/Moviedetail";

const App = () => {
  return <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="movie/:id" element={<MovieDetail/>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
      </Routes>
    </Router>
  </div>;
};

export default App;
