import {BrowserRouter, Route, Routes} from "react-router-dom"
import ShowGames from "./ShowGames/ShowGames"



export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/games" element={<ShowGames></ShowGames>} />
        </Routes>
    </BrowserRouter>
  )
}
