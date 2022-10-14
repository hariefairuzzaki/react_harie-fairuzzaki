import axios from "axios";
import CONST from "../utils/constans";

const config = {
  baseURL: CONST.BASE_URL_API,
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": "NjOXPpfhsQus7DBTDRsuXjL5ijolQ29fdRhEpXNBEv47pJG3pdX0UWs0fQS0LHc2",
  },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
