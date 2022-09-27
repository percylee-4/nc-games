import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://games-nc.herokuapp.com/api/",

});

export const FetchAllReviews = () => {
  return gamesApi.get("reviews").then((res) => {
    return res.data;
  });
};

export const FetchAllCategories = () => {
  return gamesApi.get(`categories`).then((res) => {
    return res.data
  })
}

export const FetchAllCategoryReviews = (category) => {
  return gamesApi.get(`reviews?category=${category}`).then((res) => {
    return res.data;
  });
};

export const FetchSingleReview = (id) => {
  return gamesApi.get(`reviews/${id}`).then((res) =>
  {return res.data})
}