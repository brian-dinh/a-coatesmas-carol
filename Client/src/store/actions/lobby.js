import store from "@store";

export default function generateNewConnection(connections) {
  store.dispatch({
    type: "GENERATE_NEW_CONNECTIONS",
    payload: connections
  });
}