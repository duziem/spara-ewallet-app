import axios from "axios";

const API_URL = "http://localhost:4000/transactions/";

// get user account infos
const getTransactions = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + id, config);
  return response.data;
};

const transactionService = {
  getTransactions,
};

export default transactionService;
