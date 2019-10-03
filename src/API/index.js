import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

const signUp = async (data, options = {}) => {
  const res = await axios.post(`${baseUrl}/users/signup`, data, options);
  return res.data;
};

export default {
  signUp,
};
