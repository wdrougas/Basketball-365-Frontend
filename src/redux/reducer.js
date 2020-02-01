import {combineReducers} from 'redux'
 import {FETCHED_GAMES, FETCHED_PLAYERS, FETCHED_TEAMS, FETCHED_STANDINGS} from './actionType'

 const gamesReducer = (oldState=[], action) => {
     switch(action.type) {
         case FETCHED_GAMES:
             return action.payload
        default:
            return oldState

     }
 }

 const playersReducer = (oldState=[], action) => {
     switch(action.type) {
         case FETCHED_PLAYERS:
             return action.payload
        default:
            return oldState
     }
 }

 const teamsReducer = (oldState=[], action) => {
     switch(action.type) {
         case FETCHED_TEAMS:
             return action.payload
        default:
            return oldState
     }
 }

 const standingsReducer = (oldState=[], action) => {
    switch(action.type) {
        case FETCHED_STANDINGS:
            return action.payload
        default:
            return oldState
    }
 }

const rootReducer = combineReducers({
    games: gamesReducer,
    players: playersReducer,
    teams: teamsReducer,
    standings: standingsReducer,
    comments: [],
    currentUser: null
})

export default rootReducer