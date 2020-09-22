const EVENT_URI = process.env.REACT_APP_EVENT_API;
const APP_URI = process.env.REACT_APP_API;

const api = {
  //Auth API
  login: `${APP_URI}/users/v1/auths/login`,
  //Event API
  getEvents: `${EVENT_URI}/api/v1/event`,
  createEvent: `${EVENT_URI}/api/v1/event`,
  getEvent: (id) => `${EVENT_URI}/api/v1/event/${id}`,
  addToWallet: `${APP_URI}/billings/wallet/fund`,
};

export default api;
