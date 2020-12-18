const initalState = {
  fetching: false,
  fetched: false,
  game: { isValid: false },
  myQuestions: { questions: null },
  gameState: {},
  turnState: {},
  gameResults: {}
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case "GENERATE_GAME_DETAILS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        game: action.payload,
      };
    }
    case "GENERATE_NEW_CONNECTION": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        game: { ...action.payload },
      };
    }
    case "STORE_QUESTIONS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        myQuestions: action.payload
      };
    }
    case "STORE_GAME_STATE": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        gameState: action.payload
      };
    }
    case "STORE_TURN_STATE": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        turnState: action.payload
      };
    }
    case "STORE_GAME_RESULTS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        gameResults: action.payload
      };
    }
  }
  return state;
}
