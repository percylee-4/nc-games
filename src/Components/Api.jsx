import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://games-nc.herokuapp.com/api/",
});

export const FetchAllReviews = () => {
  return gamesApi.get("reviews").then((res) => {
    return res.data;
  });
};
