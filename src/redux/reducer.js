import {combineReducers} from 'redux'
 import {FETCHED_GAMES, FETCHED_PLAYERS, FETCHED_TEAMS, FETCHED_STANDINGS, LOGGED_IN, FETCHED_COMMENTS, ADDED_COMMENT, DELETE_COMMENT, SELECTED_DATE, LOGGED_OUT} from './actionType'

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

 const userReducer = (oldState=null, action) => {
     switch(action.type) {
         case LOGGED_IN:
             return action.payload
        case LOGGED_OUT:
            return action.payload
        default:
            return oldState
     }
 }

 const commentsReducer = (oldState=[], action) => {
     switch(action.type) {
        case FETCHED_COMMENTS:
            return action.payload
        case ADDED_COMMENT: 
            return [...oldState, action.payload]
        case DELETE_COMMENT: 
            const removalIndex = oldState.findIndex(comment => comment.id === action.payload.id)
            return [...oldState.slice(0, removalIndex), ...oldState.slice(removalIndex + 1)]
        default:
            return oldState
     }
 }


let today = new Date()
let todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+1)

 const dateReducer = (oldState=todaysDate, action) => {
     switch(action.type) {
         case SELECTED_DATE:
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
    comments: commentsReducer,
    currentUser: userReducer,
    date: dateReducer
})

export default rootReducer