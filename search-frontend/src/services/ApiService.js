import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

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