const initalState = {
  fetching: false,
  fetched: false,
  gameInfo: {}
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case "UPDATE_GAMEINFO": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        gameInfo: action.payload
      };
    }
  }
  return state;
}
