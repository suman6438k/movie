import "./App.css"
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/home";

const App = () => {
  return <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="movie/:id" element={<h1>movie detail page</h1>}></Route>
        <Route path="movies/:type" element={<h1>movies list page</h1>}></Route>
      </Routes>
    </Router>
  </div>;
};

export default App;
