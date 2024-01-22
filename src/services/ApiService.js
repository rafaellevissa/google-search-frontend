import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ApiService = {
  performSearch: async (params) => {
    try {
      const response = await axios.post(`${BASE_URL}/google-search`, params);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;
