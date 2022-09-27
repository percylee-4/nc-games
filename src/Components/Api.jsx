import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://games-nc.herokuapp.com/api/",
});

export const fetchAllReviews = (category) => {
  return gamesApi
    .get("reviews", { params: { category: category } })
    .then((res) => {
      return res.data;
    });
};

export const fetchAllCategories = () => {
  return gamesApi.get(`categories`).then((res) => {
    return res.data;
  });
};

export const fetchSingleReview = (id) => {
  return gamesApi.get(`reviews/${id}`).then((res) => {
    return res.data;
  });
};

export const patchVotes = (id, inc_votes) => {
  return gamesApi.patch(`reviews/${id}`, { inc_votes: inc_votes });
};
