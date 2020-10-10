const EVENT_URI = process.env.REACT_APP_EVENT_API;
const APP_URI = process.env.REACT_APP_API;

const api = {
  //Auth API
  login: `${APP_URI}/users/v1/auths/login`,
  getUser: (id) => `${APP_URI}/users/v1/users/${id}`,

  //Event API
  getEvents: `${EVENT_URI}/api/v1/event`,
  createEvent: `${EVENT_URI}/api/v1/event`,
  getEvent: (id) => `${EVENT_URI}/api/v1/event/${id}`,
  getUserEvents: (id) => `${EVENT_URI}/api/v1/events/${id}`,
  postEventLike: `${EVENT_URI}/api/v1/event/like`,
  getEventLikes: (eventId) => `${EVENT_URI}/api/v1/event/like/${eventId}`,
  getEventLikeCount: (eventId) =>
    `${EVENT_URI}/api/v1/event/like-count/${eventId}`,
  getTotalAmountSprayedAtEvent: (eventId) =>
    `${EVENT_URI}/api/v1/all-total?eventId=${eventId}`,
  getUpcomingEvents: (userId) => `${EVENT_URI}/api/v1/attendee/event/${userId}`,
  getSpendersClub: (eventId) => `${EVENT_URI}/api/v1/spender/${eventId}`,

  //Wallet APIs
  addToWallet: `${APP_URI}/billings/wallet/fund`,
  getWalletBalance: (customerid) =>
    `${APP_URI}/billings/wallets?customerId=${customerid}`,
  withdrawFunds: `${APP_URI}/billings/withdraw`,
  addTransferAuth: `${APP_URI}/3ps/v2/transferauth/paystack`,

  //Video API
  startVideo: `${EVENT_URI}/api/v1/videolink`,

  //Attendee
  createAttendee: `${EVENT_URI}/api/v1/attendee`,
  getEventAttendee: (eventId) => `${EVENT_URI}/api/v1/attendee/${eventId}`,

  //Payments
  initializePayment: `${APP_URI}/payments/v1/paystack/initialize`,

  //Eyeson
  eyeson: {
    joinRoom: (username, id) =>
      `https://api.eyeson.team/rooms?user[name]=${username}&id=${id}`,
  },

  //Bank
  fetchBankList: (provider) => `${APP_URI}/3ps/v1/banks?provider=${provider}`,

  //Transactions
  instantCharge: `${APP_URI}/billings/charge`,
  sprayLogs: `${EVENT_URI}/api/v1/spray-logs`,
  getUserTransactionLogs: ``,
};

export default api;
