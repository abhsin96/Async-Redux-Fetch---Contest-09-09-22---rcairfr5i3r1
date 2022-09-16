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
        filteredArtilces: action.payload,
        articlesNum: 1,
        articles: data,
      };
    case "UPDATE_NO_OF_ARTICLE":
      let newData = state.filteredArtilces;
      newData = newData.filter((e, i) => (i < action.payload ? e : null));
      return {
        ...state,
        articlesNum: action.payload,
        articles: [...newData],
      };
    default:
      return state;
  }
};
