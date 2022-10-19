import config from "../configs/axiosInstance";

const APIUser = {
  async retrieveUser() {
    try {
      const response = await config.get(`/user`);
      return response.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIUser;
