import { Routes, Route } from "react-router-dom"
import { Form, Home, Login, Signup } from "../../screens";
function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/Form/:id" element={<Form />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

            </Routes>
        </>
    )
}
export default AppRouter;