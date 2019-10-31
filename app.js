/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
  How to create our fundamental game variable.
  How to generate a random number.
  How to manipulate the DOM.
  How to read from the DOM.
  How to change CSS styles.
*/

////////////////////////////////////////////////////////////////
// var score1 = 0,
// var score2 = 0;

var scores, roundScore, activePlayer, gamePlaying;

// call INIT FUNCTION TO START
init();



document.querySelector('.btn-roll').addEventListener('click', function () {
  // If game is playing
  if (gamePlaying) {
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display The Result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score only IF rolled number was NOT a 1
    if (dice !== 1) {
      // Add score if dice greater than 1 or different than 1
      roundScore += dice;

      // Display in UI/HTML
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }

});



// HOLD Button
document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
    // First Add current score to GLOBAL score
    scores[activePlayer] += roundScore;
    // scores[activePlayer] = scores[activePlayer] + roundScore;

    // Then Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

      // turn gamePlaying to false if theres a winner
      gamePlaying = false;
    } else {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    }
    // Next player
    nextPlayer();
  }
});


function nextPlayer() {
  // Next Player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active')

  document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init)


// INIT FUNCTION
function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  // Set State
  gamePlaying = true;

  // Change Css to default scores
  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2'
  // Remove winner class / color
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}

































// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// DOM Manipulation
// Getter / Get a Value
// var x = document.querySelector('#score-0').textContent;
// console.log(x);






 // // Next player
      // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      // // if(activePlayer ===0) {
      // //   activePlayer = 1
      // // } else {
      // //   activePlayer = 0
      // // }

      // // Set round score back to 0;
      // roundScore = 0;

      // document.getElementById('current-0').textContent = '0';
      // document.getElementById('current-1').textContent = '0';

      // // document.querySelector('.player-0-panel').classList.remove('active');
      // // document.querySelector('.player-1-panel').classList.add('active')

      // // Toggle lets you go back and forth removing/adding
      // document.querySelector('.player-0-panel').classList.toggle('active');
      // document.querySelector('.player-1-panel').classList.toggle('active')

      // // Reset Dice after getting 1
      // document.querySelector('.dice').style.display = 'none';







// Setter / Set a Value
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = `<em>${dice}</em>`;











































