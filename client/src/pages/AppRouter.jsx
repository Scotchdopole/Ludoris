import {BrowserRouter, Route, Routes} from "react-router-dom"
import ShowGames from "./ShowGames/ShowGames"
import Home from "./Home/Home"



export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/games" element={<ShowGames></ShowGames>} />
            <Route path="/" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}
