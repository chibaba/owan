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
      if (error.response.data.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.response.data.error);
      }
    });
};

export const postCallTransactions = async (url, data, headers) => {
  const token = cookie.get('uid');

  const requestHeader = {
    authorization: `Bearer ${token}`,
    'client-id': `${process.env.REACT_APP_PAYMENT_CLIENT_ID}`,
    ...headers,
  };

  return await axios({
    method: 'POST',
    url: `${url}`,
    data,
    headers: requestHeader,
  })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.response.data);
      throw new Error(
        error.response.data.error.responseMessage ||
          error.response.data.message,
      );
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

export const getCallTransaction = async (url, headers) => {
  const token = cookie.get('uid');
  const requestHeader = {
    headers,
    authorization: `Bearer ${token}`,
    'client-id': `${process.env.REACT_APP_PAYMENT_CLIENT_ID}`,
    'Content-Type': 'application/json',
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

export const getCallTransactions = async (url, headers) => {
  const token = cookie.get('uid');
  const requestHeader = {
    ...headers,
    authorization: `Bearer ${token}`,
    'client-id': `${process.env.REACT_APP_PAYMENT_CLIENT_ID}`,
  };
  return await axios({
    method: 'GET',
    url: `${url}`,
    headers: requestHeader,
  })
    .then((response) => response.data)
    .catch((error) => error);
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
      throw new Error(error.response.data.message);
    });
};
