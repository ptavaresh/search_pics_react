import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID b6a9cf9989a4f1c0d2cdbd05e8b845ec675dcd6c7d84acb52688c084d138168b'
  }
});