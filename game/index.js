import {Map} from 'immutable'
import {createStore} from "redux"
import { get } from 'http';

const defaultBoard = Map()

const col1 = [[0, 0], [1, 0], [2, 0]]
const col2 = [[0, 1], [1, 1], [1, 2]]
const col3 = [[2, 0], [2,1], [2,2]]
const row1 = [[0, 0], [0, 1], [0, 2]]
const row2 = [[1, 0], [1, 1], [1, 2]]
const row3 = [[2, 0], [2, 1], [2, 2]]
const leftCross = [[0, 0], [1, 1], [2, 2]]
const rightCross = [[2, 0], [1, 1], [0, 2]]

const winners = [col1, col2, col3, row1, row2, row3, leftCross, rightCross]

export const streak = (board) => {
  winners.forEach((str) => {

    const xWin = "XXX"
    const oWin = "OOO"
    let win = ''

    str.forEach((pos) => {
      const posChar = board.getIn(pos => {
        console.log('CHAR ', posChar)
        win += posChar
      })
   })

    if(win === xWin) {
      console.log('X wins')
    }else if(win === oWin) {
      console.log('O wins')
    }else {
      console.log('no win')
      win = ''
    }

  })
}

// const winner = (board) => {
//   console.log('win', board.getIn([0, 0]))
// }



const initialState = {
  board : defaultBoard,
  turn:"X"
}

const MOVE = 'MOVE';

export const move = (player,position) =>  ({type: MOVE, player, position }) ;


const gameReducer = (state = initialState, action) => {
    switch (action.type){
     case MOVE :
       return {board : state.board.setIn(action.position, action.player), turn: (state.turn === "X"? "O":"X") }
     default :
       return state
    }
   }

export default gameReducer




