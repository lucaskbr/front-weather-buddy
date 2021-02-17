const { default: axios } = require("axios");

const weatherBuddyApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export default weatherBuddyApi;