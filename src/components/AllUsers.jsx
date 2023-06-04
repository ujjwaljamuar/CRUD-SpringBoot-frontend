import { useState, useEffect } from "react";

import {
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
    Button,
    styled,
} from "@mui/material";
import { getUsersApi, deleteUserApi } from "../services/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #ffffff;
    }
`;

const TRow = styled(TableRow)`
    & > td {
        font-size: 18px;
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    const deleteUserData = async (id) => {
        await deleteUserApi(id);
        getAllUsers();
    };

    const getAllUsers = async () => {
        let response = await getUsersApi();
        setUsers(response.data);
    };

    useEffect(() => {
        getAllUsers();
    }, []);
    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.mobile}</TableCell>
                        <TableCell>
                            <Button
                                color="primary"
                                variant="contained"
                                style={{ margin: "5px 5px 5px 5px" }}
                                component={Link}
                                to={`/edit/${user.id}`}
                            >
                                Edit
                            </Button>
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={() => deleteUserData(user.id)}
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    );
};

export default AllUsers;
