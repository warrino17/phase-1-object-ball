function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            playerName: 'Alan Anderson',
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            playerName: 'Reggie Evans',
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            playerName: 'Brook Lopez',
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            playerName: 'Mason Plumlee',
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            playerName: 'Jason Terry',
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            playerName: 'Jeff Adrien',
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            playerName: 'Bismak Biyombo',
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            playerName: 'DeSagna Diop',
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            playerName: 'Ben Gordon',
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            playerName: 'Brendan Haywood',
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };

  }


function allPlayers () {
  const homePlayers = Object.values(gameObject().home.players)
  const awayPlayers = Object.values(gameObject().away.players)
  return homePlayers.concat(awayPlayers)
}


function numPointsScored(playerName) {
  return getPlayerByName(playerName).points
}


function bigShoeRebounds() {
  return allPlayers().sort ((player1, player2) => player2.shoe - player1.shoe)[0].rebounds
}

function teamColors(teamName) {
  return getTeamInfoByTeamName(teamName).colors
}

function playerNumbers (teamName) {
  return getTeamInfoByTeamName(teamName).players.map (player => player.number)
}

function playerWithLongestName () {
  return allPlayers().sort ((player1, player2) => player2.player_name.length - player1.player_name.length) [0]
}




const playerStats = playerName => {
  let player = getPlayerByName (playerName)
  let showPlayerStats = {}
  for (let key in player)
    if (key !== 'player_name')
    showPlayerStats[key] = player[key]
    return showPlayerStats
}

const shoeSize = playerName => getPlayerByName(playerName).shoe


const teamNames = ( ) => [gameObject().home.teamName, gameObject().away.teamName]


const getPlayerByName = name => allPlayers().find( player => player.playerName === name)

const getTeamInfoByTeamName = teamName => {
  if (gameObject().home.team_name === teamName)
  return gameObject().home
  else return gameObject().away
}

const playerStats = playerName => {
  let player = getPlayerByName(playerName)
  let showPlayerStats = {}
  for (let key in player)
    if (key !== 'player_name')
      showPlayerStats[key] = player[key]

  return showPlayerStats
}

const mostPointsScored = () => allPlayers().sort( (player1, player2) => player2.points - player1.points)[0]

const doesLongNameStealATon = () => {
  let playerMostSteals = allPlayers().sort( (player1, player2) => player2.steals - player1.steals)[0]
  return playerMostSteals.player_name === playerWithLongestName().player_name
}