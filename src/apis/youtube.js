import axios from "axios";
const keys = require("../config/keys");

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: keys.API_KEY
  }
});
