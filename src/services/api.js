import axios from "axios";

const usersUrl = "http://localhost:4000/users";

export const getUsersApi = async (id) => {
    id = id || "";
    try {
        return await axios.get(`${usersUrl}/${id}`);
    } catch (error) {
        console.log("Error while calling getUsers api ", error);
    }
};

export const addUserApi = async (user) => {
    return await axios.post(`${usersUrl}`, user);
};

export const deleteUserApi = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
};

export const editUserApi = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user);
};
