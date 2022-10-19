import config from "../configs/axiosInstance";

const APIDestination = {
  async retrieveDestination() {
    try {
      const response = await config.get(`/destination`);
      return response.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async getDestinationByIds(id) {
    try {
      const response = await config.get(`/destination/${id}`);
      return response.data;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIDestination;
