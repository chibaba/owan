import axios from 'axios';
import cookie from 'js-cookie';

const token = cookie.get('uid');
const clientID = process.env.REACT_APP_CLIENT_ID || '';

let header = {
  'Content-Type': 'application/json',
  authorization: `Bearer ${token}`,
  'client-id': clientID,
};

export const postCall = async (url, data, headers) => {
  const requestHeader = { ...header, headers };
  console.log(requestHeader);
  return await axios({
    method: 'POST',
    url: `${url}`,
    data,
    headers: requestHeader,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

export const getCall = async (url, headers) => {
  return await axios({
    method: 'GET',
    url: `${url}`,
    headers: { ...header, ...headers },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

export const putCall = async (url, data, headers) => {
  return await axios({
    method: 'PUT',
    url: `${url}`,
    data,
    headers: { ...header, ...headers },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};
