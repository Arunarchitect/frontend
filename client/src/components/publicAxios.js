import axios from 'axios'

const publicAxios = axios.create({
    baseURL: 'https://api.modelflick.com',
  });

export default publicAxios