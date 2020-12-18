import store from "@store";

export default function generateGameDetails(username, id, room) {
  const game = {}
  game.id = id
  game.username = username
  game.room = room
  game.isValid = true

  store.dispatch({
    type: "GENERATE_GAME_DETAILS",
    payload: game
  });
}

export function storeQuestions(myQuestions) {
  store.dispatch({
    type: "STORE_QUESTIONS",
    payload: myQuestions
  });
}

export function storeGameState(gameState) {
  store.dispatch({
    type: "STORE_GAME_STATE",
    payload: gameState
  });
}

export function storeTurnState(currentTurn) {
  store.dispatch({
    type: "STORE_TURN_STATE",
    payload: currentTurn
  });
}

export function storeGameResults(gameResults) {
  store.dispatch({
    type: "STORE_GAME_RESULTS",
    payload: gameResults
  });
}