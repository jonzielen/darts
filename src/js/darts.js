import "../sass/main.scss";

(function() {
  var startGame = document.getElementById('start-game'),
      intro = document.getElementById('intro'),
      game = document.getElementById('game'),
      results = document.getElementById('results'),
      gamePlayer1 = document.querySelector('#game .game-player1 h2'),
      gamePlayer2 = document.querySelector('#game .game-player2 h2'),
      scorePlayer1 = {},
      scorePlayer2 = {};

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

    console.log('player1: ', player1, 'player2: ', player2);
  }

})();
