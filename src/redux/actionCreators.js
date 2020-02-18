import {FETCHED_TEAMS, FETCHED_PLAYERS, FETCHED_GAMES, LOADING_GAMES, LOADING_PLAYERS, LOADING_TEAMS, FETCHED_STANDINGS, LOADING_STANDINGS, LOGGED_IN, FETCHED_COMMENTS, LOADING_COMMENTS, ADDED_COMMENT, DELETE_COMMENT, LOGGED_OUT, ADDED_FAVORITE, LOADING_FAVORITES, FETCHED_FAVORITES, DELETE_FAVORITE, FETCHED_NEWS, LOADING_NEWS, EDIT_PROFILE} from './actionType'

//import thunk
const today = new Date()
const todaysDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate())
const NEWS_KEY = process.env.REACT_APP_NEWS_API_KEY
const gamesData = 'http://localhost:3000/games'
const playersData = 'http://localhost:3000/players'
const teamsData = 'http://localhost:3000/teams'
const standingsData = 'http://localhost:3000/standings'
const commentsData = 'http://localhost:3000/comments'
const favoritesData = 'http://localhost:3000/favorites'
const newsData = ('https://newsapi.org/v2/everything?' +
'q=NBA Basketball&' +
`from=${todaysDate}&` +
'sortBy=popularity&' +
`apiKey=${NEWS_KEY}`)

function fetchedGames(gamesArray) {
    return {type: FETCHED_GAMES, payload: gamesArray}
}

function fetchedTeams(teamsArray) {
    return {type: FETCHED_TEAMS, payload: teamsArray.sort(function(a,b) {
        return a.team_id - b.team_id
    })}
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

function addedFavorite(favoriteObject) {
    return {type: ADDED_FAVORITE, payload: favoriteObject}
}

function deleteFavorite(favoriteObject) {
    return {type: DELETE_FAVORITE, payload: favoriteObject}
}

function fetchedNews(newsArray) {
    return {type: FETCHED_NEWS, payload: newsArray}
}

function editProfile(userObject) {
    return {type: EDIT_PROFILE, payload: userObject}
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

function loadingNews() {
    return {type: LOADING_NEWS}
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

function fetchingNews() {
    return (dispatch) => {
    dispatch(loadingNews())
    fetch(newsData)
    .then(res => res.json())
    .then(newsArray => {dispatch(fetchedNews(newsArray))})
    }
}




export {fetchingGames, fetchingPlayers, fetchingTeams, fetchingStandings, fetchedUser, fetchingComments, addedComment, deleteComment, loggedOut, fetchingFavorites, addedFavorite, deleteFavorite, fetchingNews, editProfile}