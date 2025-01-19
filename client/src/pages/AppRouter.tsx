import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import CreateGameForm from "../pages/CreateGameForm/CreateGameForm"


export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-game" element={<CreateGameForm />} />
      </Routes>
    </HashRouter>
  )
}
