import "../sass/main.scss";

(function() {
  var startGame = document.getElementById('start-game'),
      intro = document.getElementById('intro'),
      game = document.getElementById('game'),
      results = document.getElementById('results'),
      winnerJOM = document.querySelector('#results #winner'),
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
      scorePlayer1 = new gameProps(),
      scorePlayer2 = new gameProps(),
      activePlayer = scorePlayer1,
      inactivePlayer = scorePlayer2;

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

  function gameProps() {
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
    // this.name = document.getElementById('player1').value;
    this.player = gamePlayer1;
    this.playerPoints = gamePlayer1Points;
    this.playerPointsClassName = '.p1';
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

    var player1 = document.getElementById('player1'),
        player2 = document.getElementById('player2');

    buildGame();
  });

  function buildGame() {
    intro.classList.add('hidden');
    game.classList.remove('hidden');

    gamePlayer1.innerHTML = player1.value || 'Player 1';
    gamePlayer2.innerHTML = player2.value || 'Player 2';

    scorePlayer1.name = player1.value || 'Player 1',
    scorePlayer1.player = gamePlayer1,
    scorePlayer2.name = player2.value || 'Player 2',
    scorePlayer2.player = gamePlayer2;
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

      // updates active player
      activePlayer.player.classList.remove('active-player');
      activePlayer.playerPoints.innerHTML = addPointsArray(activePlayer);
      updateBoard(activePlayer);
      activePlayer = getActivePlayer();
      activePlayer.shot = [];
      activePlayer.player.classList.add('active-player');
    }

    // console.log(scorePlayer1, scorePlayer2);
  });

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

    // winner?
    var winner = true,
        greaterPoints = activePlayer.pointsTotal >= inactivePlayer.pointsTotal;

    for (var property in player.board) {
      if (property > 0) {
        if (player.board[property].closed === false) winner = false;
      }
    }

    console.log('winner: ', winner, 'greaterPoints: ', greaterPoints, 'winner && greaterPoints: ', winner && greaterPoints, activePlayer.pointsTotal, inactivePlayer.pointsTotal);

    if (winner && greaterPoints) {
      console.log(scorePlayer1, scorePlayer2);
      game.classList.add('hidden');
      results.classList.remove('hidden');
      winnerJOM.innerHTML = 'WINNER: ' + activePlayer.name;
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
      scorePlayer1.playerPointsClassName = '.p1';
      inactivePlayer = scorePlayer2;
      return scorePlayer1;
    };

    inactivePlayer = scorePlayer1;
    scorePlayer2.playerPointsClassName = '.p2';
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

})();
