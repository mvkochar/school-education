import { Route, Routes } from "react-router-dom"
import { About, Academics, Home } from "../pages"

const Main = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="about"
                element={<About/>}
            />
            <Route
                path="academics"
                element={<Academics/>}
            />
        </Routes>
    )
}

export default Main