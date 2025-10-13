import { Route, Routes } from "react-router-dom"
import { About, Academics, Admission, Home, StudentLife } from "../pages"

const Main = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="about"
                element={<About />}
            />
            <Route
                path="academics"
                element={<Academics />}
            />
            <Route
                path="admission"
                element={<Admission />}
            />
            <Route
                path="student-life"
                element={<StudentLife />}
            />
        </Routes>
    )
}

export default Main