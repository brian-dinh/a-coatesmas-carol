import store from "@store";

export default function updatePlayer(player) {
  store.dispatch({
    type: "UPDATE_PLAYER",
    payload: player
  });
}