import { Routes, Route } from "react-router-dom"
import { Form, Home } from "../../screens";
function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/Form/:id" element={<Form />} />

            </Routes>
        </>
    )
}
export default AppRouter;