import axios from "axios";

const transfer = async (reference, token) => {
  const reqConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    "http://localhost:4000/transactions/verify?reference=" + reference,
    reqConfig
  );

  return response.data;
};

const transferService = {
  transfer,
};

export default transferService;
