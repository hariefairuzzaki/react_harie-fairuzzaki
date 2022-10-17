import axiosInstance from "../configs/axiosInstance";

const APITodos = {
  async createTodo(data) {
    try {
      const response = await axiosInstance.post(`/todos`, data);
      return response.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async retrieveTodo() {
    try {
      const response = await axiosInstance.get(`/todos`);
      return response.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async updateTodo(data) {
    try {
      const response = await axiosInstance.put(`/todos/${data.id}`, data);
      return response.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async deleteTodo(id) {
    try {
      const response = await axiosInstance.delete(`/todos/${id}`);
      return response.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APITodos;
