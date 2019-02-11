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
      scorePlayer1 = {
        score: [],
        board : []
      },
      scorePlayer2 = {
        score: [],
        board : []
      },
      roundScore = [],
      activePlayer = getActivePlayer();

  selectedScore.forEach(function(elem) {
    elem.addEventListener('click', function() {
      var points = this.dataset.score;

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
  }

  function updateRoundDisplay(score, index) {
    if (score === 25) score = 'bull';
    if (score === 25 + ' (2)') score = 'bull (2)';
    if (score === 25 + ' (3)') score = 'bull (3)';
    roundDetails[index].innerHTML = score;
  }

  double.addEventListener('click', function(event) {
    if (roundScore.length === 0) return;

    console.log('double ', roundScore[roundScore.length-1], roundScore[roundScore.length-1]*2);
    updateRoundDisplay(roundScore[roundScore.length-1] + ' (2)', roundScore.length-1);
  });

  triple.addEventListener('click', function(event) {
    if (roundScore.length === 0) return;

    console.log('triple ', roundScore[roundScore.length-1], roundScore[roundScore.length-1]*3);
    updateRoundDisplay(roundScore[roundScore.length-1] + ' (3)', roundScore.length-1);
  });

  deleteShot.addEventListener('click', function(event) {
    roundScore.pop();
    updateRoundDisplay('', roundScore.length);
  });

  addScore.addEventListener('click', function(event) {
    if (roundScore.length === 3) {
      activePlayer.score.push(roundScore);
      activePlayer = getActivePlayer();
      roundDetails.forEach(function(elem) {
        elem.innerHTML = '';
        roundScore = [];
      });
    }

    console.log(scorePlayer1, scorePlayer2);
  });

  function getActivePlayer() {
    if (scorePlayer1.score.length == scorePlayer2.score.length) return scorePlayer1;
    return scorePlayer2;
  }

})();
