import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Home from "./contents/Home"
import HeaderPage from "./structure/HeaderPage"
import Cybersecurity from "./contents/Cybersecurity"
import Datascience from "./contents/Datascience"
import TCC from "./contents/TCC"
import "./index.css"

export default function LocalRoutes() {
  return (
    <>
      <BrowserRouter>
        <HeaderPage />
        <Routes classname="contents">
          <Route path="/" element={<Home />}></Route>
          <Route path="/cyber-security" element={<Cybersecurity />}></Route>
          <Route path="/data-science" element={<Datascience />}></Route>
          <Route path="/tcc" element={<TCC />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
