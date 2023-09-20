import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpCLient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params) {
    return this.httpCLient.get("search", params);
  }

  async videos(params) {
    return this.httpCLient.get("videos", params);
  }
}
