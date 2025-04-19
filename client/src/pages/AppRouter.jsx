import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop";
import AdminRoute from "./AdminRoute"
import ShowGames from "./ShowGames/ShowGames"
import GamePage from "./GamePage/GamePage"
import Home from "./Home/Home"
import LoginPage from "./LoginPage/LoginPage"
import RegisterPage from "./RegisterPage/RegisterPage"
import UserProfile from "./UserProfile/UserProfile"
import AdminPanel from "./AdminPanel/AdminPanel"
import CreateForm from "./AdminPanel/CreateForm/CreateForm"
import UpdateForm from "./AdminPanel/UpdateForm/UpdateForm";
import NotFound from "./NotFound/NotFound";



export default function AppRouter() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/games" element={<ShowGames />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile/:profileId" element={<UserProfile />} />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/create-game"
          element={
            <AdminRoute>
              <CreateForm />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/update-game"
          element={
            <AdminRoute>
              <UpdateForm />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
