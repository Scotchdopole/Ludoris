import {BrowserRouter, Route, Routes} from "react-router-dom"
import ShowGames from "./ShowGames/ShowGames"
import GamePage from "./GamePage/GamePage"
import Home from "./Home/Home"
import LoginPage from "./LoginPage/LoginPage"
import RegisterPage from "./RegisterPage/RegisterPage"



export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/games" element={<ShowGames/>} />
            <Route path="/game/:id" element={<GamePage/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
        </Routes>
    </BrowserRouter>
  )
}
