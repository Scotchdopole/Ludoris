import {BrowserRouter, Route, Routes} from "react-router-dom"
import ShowGames from "./ShowGames/ShowGames"
import GamePage from "./GamePage/GamePage"



export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/games" element={<ShowGames/>} />
            <Route path="/game/:id" element={<GamePage/>} />
        </Routes>
    </BrowserRouter>
  )
}
