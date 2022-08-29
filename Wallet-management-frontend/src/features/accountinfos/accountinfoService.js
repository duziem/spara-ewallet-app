import axios from "axios";

const API_URL = "http://localhost:4000/wallets/";

// create new account info
const createAccountinfo = async (accountinfoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    API_URL + "create-account",
    accountinfoData,
    config
  );
  //   console.log(response.data);
  return response.data;
};

// get user account infos
const getAccountinfos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

// delete user account infos
// const deleteAccountinfo = async (accountinfoId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const response = await axios.delete(API_URL + accountinfoId, config);
//   return response.data;
// };

const accountinfoService = {
  createAccountinfo,
  getAccountinfos,
  //   deleteAccountinfo,
};

export default accountinfoService;
