const initialState = {
  articlesNum: 0,
  articles: [],
};

export const hotNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_DATA":
      return {
        ...state,
        articles: action.payload,
        articlesNum: 1,
      };
    case "UPDATE_NO_OF_ARTICLE":
      let data = [];
      for (let i = 0; i < action.payload; i++) {
        data.push(state.articles[i]);
      }
      return {
        ...state,
        articlesNum: action.payload,
        articles: data,
      };
    default:
      return state;
  }
};
