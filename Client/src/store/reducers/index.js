import { combineReducers } from 'redux';
import player from './player'
import game from './game'
import gameInfo from './gameInfo'
import lobby from './lobby'

export default combineReducers({
  game,
  gameInfo,
  lobby,
  player
});
