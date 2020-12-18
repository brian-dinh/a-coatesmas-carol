const initalState = {
  fetching: false,
  fetched: false,
  player: {},
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case "UPDATE_PLAYER": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        player: action.payload
      };
    }
  }
  return state;
}
