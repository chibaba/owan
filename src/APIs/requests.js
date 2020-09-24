import axios from 'axios';
import cookie from 'js-cookie';

const clientID = process.env.REACT_APP_CLIENT_ID || '';

let header = {
  'Content-Type': 'application/json',
  'client-id': clientID,
};

export const postCall = async (url, data, headers, noClient) => {
  const token = cookie.get('uid');
  const user_id = await cookie.get('auid');

  const requestHeader = !noClient
    ? {
        ...header,
        ...headers,
        authorization: `Bearer ${token}`,
        user_id,
      }
    : {
        ...headers,
        authorization: `Bearer ${token}`,
        user_id,
      };

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
  const token = cookie.get('uid');
  const requestHeader = {
    ...header,
    headers,
    authorization: `Bearer ${token}`,
  };
  return await axios({
    method: 'GET',
    url: `${url}`,
    headers: requestHeader,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

export const putCall = async (url, data, headers) => {
  const token = cookie.get('uid');
  const requestHeader = {
    ...header,
    headers,
    authorization: `Bearer ${token}`,
  };
  return await axios({
    method: 'PUT',
    url: `${url}`,
    data,
    headers: requestHeader,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};
