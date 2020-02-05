import {FETCHED_TEAMS, FETCHED_PLAYERS, FETCHED_GAMES, LOADING_GAMES, LOADING_PLAYERS, LOADING_TEAMS, FETCHED_STANDINGS, LOADING_STANDINGS, LOGGED_IN, FETCHED_COMMENTS, LOADING_COMMENTS, ADDED_COMMENT, DELETE_COMMENT, LOGGED_OUT, ADDED_FAVORITE, LOADING_FAVORITES, FETCHED_FAVORITES} from './actionType'

//import thunk
const gamesData = 'http://localhost:3000/games'
const playersData = 'http://localhost:3000/players'
const teamsData = 'http://localhost:3000/teams'
const standingsData = 'http://localhost:3000/standings'
const commentsData = 'http://localhost:3000/comments'
const favoritesData = 'http://localhost:3000/favorites'

function fetchedGames(gamesArray) {
    return {type: FETCHED_GAMES, payload: gamesArray}
}

function fetchedTeams(teamsArray) {
    return {type: FETCHED_TEAMS, payload: teamsArray}
}

function fetchedPlayers(playersArray) {
    return {type: FETCHED_PLAYERS, payload: playersArray}
}

function fetchedStandings(standingsArray) {
    return {type: FETCHED_STANDINGS, payload: standingsArray}
}

function fetchedUser(userObject) {
    return {type: LOGGED_IN, payload: userObject}
} 

function fetchedComments(commentsArray) {
    return {type: FETCHED_COMMENTS, payload: commentsArray}
}

function addedComment(commentObject) {
    return {type: ADDED_COMMENT, payload: commentObject}
}

function deleteComment(commentObject) {
    return {type: DELETE_COMMENT, payload: commentObject}
}


function loggedOut() {
    return {type: LOGGED_OUT, payload: null}
}

function fetchedFavorites(favoritesArray) {
    return {type: FETCHED_FAVORITES, payload: favoritesArray}
}

function addedFavorite(favorite) {
    return {type: ADDED_FAVORITE, payload: favorite}
}



function loadingGames(){
    return {type: LOADING_GAMES}
}

function loadingTeams(){
    return {type: LOADING_TEAMS}
}

function loadingPlayers(){
    return {type: LOADING_PLAYERS}
}

function loadingStandings(){
    return {type: LOADING_STANDINGS}
}

function loadingComments(){
    return {type: LOADING_COMMENTS}
}

function loadingFavorites(){
    return {type: LOADING_FAVORITES}
}




function fetchingGames(){
    return (dispatch) => {
        dispatch(loadingGames())
        fetch(gamesData)
        .then(res => res.json())
        .then(gamesArray => {dispatch(fetchedGames(gamesArray))})
    }
}

function fetchingPlayers(){
    return (dispatch) => {
        dispatch(loadingPlayers())
        fetch(playersData)
        .then(res => res.json())
        .then(playersArray => {dispatch(fetchedPlayers(playersArray))})
    }
}

function fetchingTeams() {
    return (dispatch) => {
        dispatch(loadingTeams())
        fetch(teamsData)
        .then(res => res.json())
        .then(teamsArray => {dispatch(fetchedTeams(teamsArray))})
    }
}

function fetchingStandings() {
    return (dispatch) => {
        dispatch(loadingStandings())
        fetch(standingsData)
        .then(res => res.json())
        .then(standingsArray => {dispatch(fetchedStandings(standingsArray))})
    }
}

function fetchingComments() {
    return (dispatch) => {
        dispatch(loadingComments())
        fetch(commentsData)
        .then(res => res.json())
        .then(commentsArray => {dispatch(fetchedComments(commentsArray))})
    }
}

function fetchingFavorites() {
    return (dispatch) => {
        dispatch(loadingFavorites())
        fetch(favoritesData)
        .then(res => res.json())
        .then(favoritesArray => {dispatch(fetchedFavorites(favoritesArray))})
    }
}




export {fetchingGames, fetchingPlayers, fetchingTeams, fetchingStandings, fetchedUser, fetchingComments, addedComment, deleteComment, loggedOut, fetchingFavorites, addedFavorite}