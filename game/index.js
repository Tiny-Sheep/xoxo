import {Map} from 'immutable'
import {createStore} from "redux"
import { get } from 'http';

const defaultBoard = Map()

const initialState = {
  board : defaultBoard,
  turn:"X"
}

const MOVE = 'MOVE';

export const move = (player,position) =>  ({type: MOVE, player, position }) ;


const gameReducer = (state = initialState, action) => {
    console.log("what is action",action)
    console.log("what is state.board", state.board)
    // console.log("what is get state", getState())
    switch (action.type){
     case MOVE :
      console.log(action.position)
       return {board : state.board.setIn(action.position, action.player), turn: (state.turn === "X"? "O":"X") }
     default :
       return state
    }
   }

export default gameReducer




