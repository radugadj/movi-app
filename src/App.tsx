import Header from "./components/Header/Header.tsx";
import Home from "./pages/Home.tsx";
import {Route, Routes} from "react-router-dom";
import NowPlaying from "./pages/NowPlaying.tsx";
import Popular from "./pages/Popular.tsx";


function App() {
  return (
         <>
              <Header/>
              <Routes>
                  <Route path="/" element={ <Home/>} />
                  <Route path="popular" element={ <Popular />} />
                  <Route path="now_playing" element={ <NowPlaying />} />
              </Routes>
         
      </>
  );
}

export default App
