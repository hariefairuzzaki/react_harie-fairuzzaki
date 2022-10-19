import axios from "axios";
import CONST from "../utils/constans";

const config = {
  baseURL: CONST.BASE_URL_API,
  headers: { "x-hasura-admin-secret": "1ImF8Wln9dvucOU6WXs0k5Ope59MoZIssIZf0m6TfJHCCfJIT1UvD0xD7KXaTUcl" },
};

const user = axios.create(config);

export default user;
