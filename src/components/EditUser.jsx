import { useState, useEffect } from "react";

import {
    FormGroup,
    FormControl,
    InputLabel,
    Input,
    Button,
    styled,
    Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getUsersApi, editUserApi } from "../services/api";

const initialValue = {
    name: "",
    username: "",
    email: "",
    phone: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, mobile } = user;
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUsersApi(id);
        setUser(response.data);
    };

    const editUserDetails = async () => {
        const response = await editUserApi(id, user);
        navigate("/allUsers");
    };

    const onValueChange = (e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input
                    onChange={(e) => onValueChange(e)}
                    name="name"
                    value={user.name}
                    id="my-input"
                    aria-describedby="my-helper-text"
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input
                    onChange={(e) => onValueChange(e)}
                    name="username"
                    value={user.username}
                    id="my-input"
                    aria-describedby="my-helper-text"
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input
                    onChange={(e) => onValueChange(e)}
                    name="email"
                    value={user.email}
                    id="my-input"
                    aria-describedby="my-helper-text"
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Mobile No.</InputLabel>
                <Input
                    onChange={(e) => onValueChange(e)}
                    name="mobile"
                    value={user.mobile}
                    id="my-input"
                    aria-describedby="my-helper-text"
                />
            </FormControl>
            <FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => editUserDetails()}
                >
                    Edit User
                </Button>
            </FormControl>
        </Container>
    );
};

export default EditUser;
