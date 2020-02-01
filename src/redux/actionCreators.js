import {FETCHED_TEAMS, FETCHED_PLAYERS, FETCHED_GAMES, LOADING_GAMES, LOADING_PLAYERS, LOADING_TEAMS, FETCHED_STANDINGS, LOADING_STANDINGS} from './actionType'

//import thunk
const gamesData = 'http://localhost:3000/games'
const playersData = 'http://localhost:3000/players'
const teamsData = 'http://localhost:3000/teams'
const standingsData = 'http://localhost:3000/standings'

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


export {fetchingGames, fetchingPlayers, fetchingTeams, fetchingStandings}