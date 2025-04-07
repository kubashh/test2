import { Route, Routes } from "react-router-dom"
import Route1 from "./Route1"
import Route2 from "./Route2"

export default function () {
  return (
    <Routes>
      <Route path={"test2"} element={<Route1 />} />
      <Route path={"test2/r2"} element={<Route2 />} />
    </Routes>
  )
}
