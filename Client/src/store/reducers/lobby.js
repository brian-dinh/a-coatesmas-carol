const initalState = {
  fetching: false,
  fetched: false,
  players: {},
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case "GENERATE_NEW_CONNECTION": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        players: action.payload
      };
    }
  }
  return state;
}
