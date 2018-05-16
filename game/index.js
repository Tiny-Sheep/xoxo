import {Map} from 'immutable'
import {createStore} from "redux"

const defaultBoard = Map()

const playerX= ()=>{store.dispatch({type:"MOVE", postion:[0,0], player:"X"});
const playerO= ()=>{store.dispatch({type:"MOVE", postion:[0,0], player:"O"});




export default function reducer(state={board:defaultBoard}, action) {


 switch (action.type){
   case "X":

 } 



  return state
}