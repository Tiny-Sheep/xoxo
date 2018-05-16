import {Map} from 'immutable'
import {createStore} from "redux"

const defaultBoard = Map()
let turn = 'X'
const initialState = {
  board : defaultBoard
}

const MOVE = 'MOVE';

const makeMove = () => { store.dispatch({type: "MOVE", position, player : turn }) };


export default reducer = (state = initialState, action) => {
 switch (action.type){
  case MOVE :
    return {board : board.setIn(positon, player)}
  default :
    return state
 }
}



