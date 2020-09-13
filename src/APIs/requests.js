import axios from 'axios';

const URI = process.env.REACT_APP_EVENT_API;

export const postCall = async (url, data, headers) => {
  return await axios({
    method: 'POST',
    url: `${URI}${url}`,
    data,
    headers,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

export const getCall = async (url, headers) => {
  return await axios({
    method: 'GET',
    url: `${URI}${url}`,
    headers,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

export const putCall = async (url, data, headers) => {
  return await axios({
    method: 'PUT',
    url: `${URI}${url}`,
    data,
    headers,
  })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};
