import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminRoute from "./AdminRoute"
import ShowGames from "./ShowGames/ShowGames"
import GamePage from "./GamePage/GamePage"
import Home from "./Home/Home"
import LoginPage from "./LoginPage/LoginPage"
import RegisterPage from "./RegisterPage/RegisterPage"
import UserProfile from "./UserProfile/UserProfile"
import AdminPanel from "./AdminPanel/AdminPanel"



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/games" element={<ShowGames />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile/:profileId" element={<UserProfile />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
