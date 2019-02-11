import "../sass/main.scss";

(function() {
  var startGame = document.getElementById('start-game'),
      intro = document.getElementById('intro'),
      game = document.getElementById('game'),
      results = document.getElementById('results'),
      gamePlayer1 = document.querySelector('#game .game-player1 h2'),
      gamePlayer2 = document.querySelector('#game .game-player2 h2'),
      selectedScore = document.querySelectorAll('#game .points'),
      roundDetails = document.querySelectorAll('#game .round-details div[class^="shot-"]'),
      double = document.querySelector('#game .score-adj .double'),
      triple = document.querySelector('#game .score-adj .triple'),
      deleteShot = document.querySelector('#game .round-details .delete'),
      addScore = document.querySelector('#game .round-details .add'),
      scorePlayer1 = new gameProps(),
      scorePlayer2 = new gameProps(),
      roundScore = [],
      activePlayer = scorePlayer1;

  function gameProps() {
    this.score = [];
    this.board = [];
    this.shot = [];
  }

  selectedScore.forEach(function(elem) {
    elem.addEventListener('click', function() {
      if (roundScore.length < 3) {
        roundScore.push(Number(this.dataset.score));
        updateRoundDisplay(Number(this.dataset.score), roundScore.length-1);
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

    gamePlayer1.innerHTML = player1.value;
    gamePlayer2.innerHTML = player2.value;

    scorePlayer1.name = player1.value,
    scorePlayer1.player = gamePlayer1,
    scorePlayer2.name = player2.value,
    scorePlayer2.player = gamePlayer2;
  }

  function updateRoundDisplay(score, index) {
    if (score === 25) score = 'bull';
    if (score === 25 + ' (2)') score = 'bull (2)';
    if (score === 25 + ' (3)') score = 'bull (3)';
    roundDetails[index].innerHTML = score;
  }

  double.addEventListener('click', function() {
    if (roundScore.length === 0) return;

    console.log('double ', roundScore[roundScore.length-1], roundScore[roundScore.length-1]*2);
    updateRoundDisplay(roundScore[roundScore.length-1] + ' (2)', roundScore.length-1);
  });

  triple.addEventListener('click', function() {
    if (roundScore.length === 0) return;

    console.log('triple ', roundScore[roundScore.length-1], roundScore[roundScore.length-1]*3);
    updateRoundDisplay(roundScore[roundScore.length-1] + ' (3)', roundScore.length-1);
  });

  deleteShot.addEventListener('click', function() {
    roundScore.pop();
    updateRoundDisplay('', roundScore.length);
  });

  addScore.addEventListener('click', function() {
    if (roundScore.length === 3) {
      roundScore.forEach(function(elem) {
        activePlayer.score.push(elem);
      });

      roundDetails.forEach(function(elem) {
        elem.innerHTML = '';
      });

      activePlayer.player.classList.remove('active-player');
      activePlayer = getActivePlayer();
      roundScore = [];
      activePlayer.player.classList.add('active-player');
    }
  });

  function getActivePlayer() {
    if (scorePlayer1.score.length == scorePlayer2.score.length) return scorePlayer1;
    return scorePlayer2;
  }

})();
