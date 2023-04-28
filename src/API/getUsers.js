import axios from 'axios';

axios.defaults.baseURL = 'https://644bf0414bdbc0cc3a9e7ae3.mockapi.io/';
export let page = 1;
const limit = 4;

export const fetchUsers = async () => {
  try {
    const res = await axios.get(`users?page=${page}&limit=${limit}`);
    page = page + 1;
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
