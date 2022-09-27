import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://games-nc.herokuapp.com/api/",
});

export const fetchAllReviews = () => {
  return gamesApi.get("reviews").then((res) => {
    return res.data;
  });
};

export const fetchAllCategories = () => {
  return gamesApi.get(`categories`).then((res) => {
    return res.data;
  });
};

export const fetchAllCategoryReviews = (category) => {
  return gamesApi.get(`reviews?category=${category}`).then((res) => {
    return res.data;
  });
};

export const fetchSingleReview = (id) => {
  return gamesApi.get(`reviews/${id}`).then((res) => {
    return res.data;
  });
};
