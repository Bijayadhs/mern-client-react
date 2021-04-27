import axios from 'axios';

export const addCart = async (cartCount) =>
    await axios.post(`${process.env.REACT_APP_API}/cart`, cartCount);
