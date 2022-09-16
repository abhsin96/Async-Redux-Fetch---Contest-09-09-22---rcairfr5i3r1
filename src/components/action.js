import axios from "axios";

export const getData = (payload) => ({
  type: "FETCHED_DATA",
  payload,
});

export const updateNumber = (payload) => ({
  type: "UPDATE_NO_OF_ARTICLE",
  payload,
});

export const fetchAsync = (url) => (dispatch) => {
  axios.get(url).then((res) => dispatch(getData(res.data.articles)));
};
