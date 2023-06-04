import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Crud from "./components/Crud";
import Navbar from "./components/Navbar";
import EditUser from "./components/EditUser";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Crud />} />
                <Route path="/allUsers" element={<AllUsers />} />
                <Route path="/addUser" element={<AddUser />} />
                <Route path="/edit/:id" element={<EditUser />} />
                {/* <Route element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
