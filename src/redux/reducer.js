import {combineReducers} from 'redux'
 import {FETCHED_GAMES, FETCHED_PLAYERS, FETCHED_TEAMS} from './actionType'

 const gamesReducer = (oldState=null, action) => {
     switch(action.type) {
         case FETCHED_GAMES:
             return action.payload
        default:
            return oldState

     }
 }

 const playersReducer = (oldState=null, action) => {
     switch(action.type) {
         case FETCHED_PLAYERS:
             return action.payload
        default:
            return oldState
     }
 }

 const teamsReducer = (oldState=null, action) => {
     switch(action.type) {
         case FETCHED_TEAMS:
             return action.payload
        default:
            return oldState
     }
 }
//oldState equals to null so easier to render with a tertiary 
const rootReducer = combineReducers({
    games: gamesReducer,
    players: playersReducer,
    teams: teamsReducer
})

export default rootReducer