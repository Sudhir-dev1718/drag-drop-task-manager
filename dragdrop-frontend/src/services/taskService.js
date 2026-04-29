import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks";

export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTask = async (title) => {
    // Sends POST request to Spring Boot
    const response = await axios.post(API_URL, { title, status: "todo" });
    return response.data;
};

export const updateTaskStatus = async (id, status) => {
    // Sends PUT request to Spring Boot
    const response = await axios.put(`${API_URL}/${id}`, { status });
    return response.data;
};

export const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};