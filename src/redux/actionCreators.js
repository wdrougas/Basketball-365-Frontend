import {FETCHED_TEAMS, FETCHED_PLAYERS, FETCHED_GAMES, LOADING_GAMES, LOADING_PLAYERS, LOADING_TEAMS} from './actionType'

//import thunk
const gamesData = 'http://localhost:3000/games'
const playersData = 'http://localhost:3000/players'
const teamsData = 'http://localhost:3000/teams'


function fetchedGames(gamesArray) {
    return {type: FETCHED_GAMES, payload: gamesArray}
}

function fetchedTeams(teamsArray) {
    return {type: FETCHED_TEAMS, payload: teamsArray}
}

function fetchedPlayers(playersArray) {
    return {type: FETCHED_PLAYERS, payload: playersArray}
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



export {fetchingGames, fetchingPlayers, fetchingTeams}