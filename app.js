/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, previousRoll, dice, scoreInput;
initGame();


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'none';
}
function resetGlobalScore(){
    if (previousRoll === 6 && dice === 6){
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = 0;
        previousRoll = 0;
        nextPlayer();
    }
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    setScore();
    // 1. random number
    dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score IF the rolled number is NOT a 1
    resetGlobalScore();
    if (dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next Player
        nextPlayer();
    }

    previousRoll = dice;

} );

document.querySelector('.btn-hold').addEventListener('click', function() {
    //add rolled CURRENT score to the players GLOBAL score
    scores[activePlayer] += roundScore;
    // Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check if player won the game
    if (scores[activePlayer] >= scoreInput){
        document.querySelector('#name-' + activePlayer).textContent = "Winner!!!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner');
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
    } else {
        nextPlayer();
    }
})
document.querySelector('.btn-new').addEventListener('click', initGame);

function initGame() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    previousRoll = 0;
    document.getElementById('player-input').style.display = 'block';
    document.querySelector('.input-form').style.display = 'block';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block'; 
}

function setScore() {
    scoreInput = document.getElementById('player-input').value
    if (scoreInput){
        scoreInput = document.getElementById('player-input').value
    } else {
        scoreInput = 100;
        document.getElementById('player-input').style.display = 'none';
        document.querySelector('.input-form').style.display = 'none';
    }  
}
