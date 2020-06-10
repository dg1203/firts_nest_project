import axios from 'axios';

export const setAxiosConfig = (accessToken: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  localStorage.setItem('accessToken', accessToken);
};
