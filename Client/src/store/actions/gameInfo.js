import store from "@store";

export function updateGameInfo(gameInfo) {
  store.dispatch({
    type: "UPDATE_GAMEINFO",
    payload: gameInfo
  });
}