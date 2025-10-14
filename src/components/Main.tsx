import { Route, Routes } from "react-router-dom"
import { About, Academics, Admission, Contact, Home, StudentLife } from "../pages"

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
            <Route
                path="contact"
                element={<Contact/>}
            />
        </Routes>
    )
}

export default Main