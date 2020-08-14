export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQA_iVhtrXGCAn307M_AV1oeavJ9-1d8SmuCRHzD3BeLZas3SJa00ZgD_E855ZyPNmIgVvZK7G5a5M_BSXLiHyM7jEW7sLIJOIF6yBKE_buhc5WvGxMyx7d-3Trllefgam4fAC5N-D0V3jYsXwdNbMyugXIC5w6MgQ",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
