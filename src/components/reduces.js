const initialState = {
  articlesNum: 0,
  articles: [],
  filteredArtilces: [],
};

export const hotNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_DATA":
      let data = action.payload;
      data = data.filter((e, i) => (i < 1 ? e : null));
      return {
        ...state,
        articles: action.payload,
        articlesNum: 1,
        filteredArtilces: data,
      };
    case "UPDATE_NO_OF_ARTICLE":
      let newData = state.articles;
      newData = newData.filter((e, i) => (i < action.payload ? e : null));
      return {
        ...state,
        articlesNum: action.payload,
        filteredArtilces: [...newData],
      };
    default:
      return state;
  }
};
