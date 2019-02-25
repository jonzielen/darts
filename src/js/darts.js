import "../sass/main.scss";

(function() {
  var body = document.body,
      startGame = document.getElementById('start-game'),
      intro = document.getElementById('intro'),
      game = document.getElementById('game'),
      results = document.getElementById('results'),
      resultsWinner = document.querySelector('#results #winner'),
      player1 = document.getElementById('player1'),
      player2 = document.getElementById('player2'),
      gamePlayer1 = document.querySelector('#game .game-player1 h2'),
      gamePlayer2 = document.querySelector('#game .game-player2 h2'),
      gamePlayer1Points = document.querySelector('#game .game-player1 h3'),
      gamePlayer2Points = document.querySelector('#game .game-player2 h3'),
      selectedScore = document.querySelectorAll('#game .points'),
      roundDetails = document.querySelectorAll('#game .round-details div[class^="shot-"]'),
      double = document.querySelector('#game .score-adj .double'),
      triple = document.querySelector('#game .score-adj .triple'),
      deleteShot = document.querySelector('#game .round-details .delete'),
      addScore = document.querySelector('#game .round-details .add'),
      scorePlayer1 = new gameProps({
        playerPointsClassName: '.p1',
        player: gamePlayer1,
        playerPoints: gamePlayer1Points,
        active: true
      }),
      scorePlayer2 = new gameProps({
        playerPointsClassName: '.p2',
        player: gamePlayer2,
        playerPoints: gamePlayer2Points,
        active: false
      }),
      activePlayer = scorePlayer1,
      inactivePlayer = scorePlayer2,
      saveGame = document.getElementById('save-game'),
      newGame = document.getElementById('reset');

  function boardPlay() {
    return {
      closed: false,
      hits: 0,
      marker: {
        0: '-',
        1: '/',
        2: 'X',
        3: 'O'
      }
    }
  }

  function gameProps(data) {

    // adds player specific data
    for (var prop in data) {
      this[prop] = data[prop];
    }

    this.pointsArray = [];
    this.pointsTotal = 0;
    this.board = {
      20: new boardPlay(),
      19: new boardPlay(),
      18: new boardPlay(),
      17: new boardPlay(),
      16: new boardPlay(),
      15: new boardPlay(),
      25: new boardPlay()
    };
    this.shot = [];
  }

  selectedScore.forEach(function(elem) {
    elem.addEventListener('click', function() {
      if (activePlayer.shot.length < 3) {

        activePlayer.shot.push([Number(this.dataset.score)]);

        updateRoundDisplay(Number(this.dataset.score), activePlayer.shot.length-1);
      }
    });
  });

  startGame.addEventListener('click', function(event) {
    event.preventDefault();
    buildGame();
  });

  function buildGame() {
    var p1Name = player1.value || 'Player 1',
        p2Name = player2.value || 'Player 2';

    gamePlayer1.innerHTML = p1Name,
    gamePlayer2.innerHTML = p2Name,
    scorePlayer1.name = p1Name,
    scorePlayer2.name = p2Name;

    hideShow(game,intro);
  }

  function updateRoundDisplay(score, index) {
    if (score === 25) score = 'bull';
    if (score === 25 + ' (2)') score = 'bull (2)';
    if (score === 25 + ' (3)') score = 'bull (3)';
    roundDetails[index].innerHTML = score;
  }

  double.addEventListener('click', function() {
    if (activePlayer.shot.length === 0) return;

    var shotScore = activePlayer.shot[activePlayer.shot.length-1][0];

    updateRoundDisplay(shotScore + ' (2)', activePlayer.shot.length-1);

    activePlayer.shot.pop();
    activePlayer.shot.push([shotScore, shotScore]);
  });

  triple.addEventListener('click', function() {
    if (activePlayer.shot.length === 0) return;

    var shotScore = activePlayer.shot[activePlayer.shot.length-1][0];

    updateRoundDisplay(shotScore + ' (3)', activePlayer.shot.length-1);

    activePlayer.shot.pop();
    activePlayer.shot.push([shotScore, shotScore, shotScore]);
  });

  deleteShot.addEventListener('click', function() {
    activePlayer.shot.pop();
    updateRoundDisplay('', activePlayer.shot.length);
  });

  addScore.addEventListener('click', function() {
    if (activePlayer.shot.length === 3) {

      updateBoard(activePlayer);

      // updates active player
      activePlayer.player.classList.remove('active-player');
      activePlayer.playerPoints.innerHTML = addPointsArray(activePlayer);
      winnerCheck(activePlayer);
      activePlayer = getActivePlayer();
      activePlayer.shot = [];
      activePlayer.player.classList.add('active-player');
    }

    // console.log(scorePlayer1, scorePlayer2);
  });

  function winnerCheck(player) {
    // winner
    var winner = true,
        greaterPoints = activePlayer.pointsTotal >= inactivePlayer.pointsTotal;

    for (var property in player.board) {
      if (property > 0) {
        if (player.board[property].closed === false) winner = false;
      }
    }

    if (winner && greaterPoints) {
      hideShow(results, game);
      resultsWinner.innerHTML = 'WINNER: ' + activePlayer.name;
    }
  }

  function updateBoard(player) {

    var flatScore = player.shot.flat();

    flatScore.map(function(elem) {
      updateBoardPlay(elem, player);
    });

    roundDetails.forEach(function(elem) {
      elem.innerHTML = '';
    });

    // updates points
    scorePlayer1.playerPoints = gamePlayer1Points,
    scorePlayer2.playerPoints = gamePlayer2Points;

    // updates board marks
    for (var property in player.board) {
      document.querySelector('#game .score-'+property+' '+player.playerPointsClassName).innerHTML = player.board[property].marker[player.board[property].hits];
    }
  }

  function updateBoardPlay(score, player) {

    if (player.board[score]) {
      if (player.board[score].closed) {
        if (inactivePlayer.board[score].closed === false) {
          player.pointsArray.push(score);
        }
      }

      if (player.board[score].closed === false) {
        if (player.board[score].hits < 3) {
          player.board[score].hits = player.board[score].hits + 1;
          if (player.board[score].hits === 3) player.board[score].closed = true;
        }
      }
    }
  }

  function getActivePlayer() {
    if (scorePlayer1.shot.length == scorePlayer2.shot.length) {
      activePlayer.shot = [];
      inactivePlayer = scorePlayer2;
      return scorePlayer1;
    };

    inactivePlayer = scorePlayer1;
    return scorePlayer2;
  }

  function addPointsArray(player) {
    var a = activePlayer.pointsArray,
        sum = a.reduce(function(a, b) { return a + b; }, 0);

    activePlayer.pointsArray = [];

    activePlayer.pointsTotal = activePlayer.pointsTotal + sum;

    if (activePlayer.pointsTotal > 0) return activePlayer.pointsTotal;
    return '';
  }

  newGame.addEventListener('click', function() {
    resetPlay();
  });

  function resetPlay() {
    hideShow(intro, results);

    scorePlayer1 = new gameProps(),
    scorePlayer2 = new gameProps(),
    activePlayer = scorePlayer1,
    inactivePlayer = scorePlayer2,
    scorePlayer1.playerPoints.innerHTML = '',
    scorePlayer2.playerPoints.innerHTML = '';

    // reset board marks
    updateBoard(scorePlayer1);
    updateBoard(scorePlayer2);

    console.log(activePlayer, inactivePlayer);
  }

  function hideShow(elem1, elem2) {
    elem1.classList.remove('hidden');
    elem2.classList.add('hidden');
  }
})();
