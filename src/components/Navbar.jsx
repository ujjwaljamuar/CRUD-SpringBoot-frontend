import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
    background: #805ad5;
    text-decoration: none;
`;

const Tabs = styled(NavLink)`
    color: inherit;
    font-size: 1.2rem;
    margin-right: 1rem;
    text-decoration: none;
`;

const Navbar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to={"/"}>CRUD</Tabs>
                <Tabs to={"/allUsers"}>All Users</Tabs>
                <Tabs to={"/addUser"}>Add User</Tabs>
            </Toolbar>
        </Header>
    );
};

export default Navbar;
