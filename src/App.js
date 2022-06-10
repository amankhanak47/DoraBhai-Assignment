import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Library from "./Pages/Library";
import Upload from "./Pages/Upload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Footer />
        <Sidebar />
        <div className="pages">
          <Routes>
            <Route exact path={"/"} element={<Home />}/>
            <Route exact path={"/library"} element={<Library />} />
            <Route exact path={"/upload"} element={<Upload />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
