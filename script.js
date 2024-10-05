const score0El = document.getElementById('score-0');
const score1El = document.getElementById('score-1');
const diceEl = document.querySelector('.dice-img');
const newGameEl = document.querySelector('.new-game-btn');
const rollEl = document.querySelector('.roll-dice-btn');
const holdEl = document.querySelector('.hold-btn');
const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');

score1El.textContent = 0;
score0El.textContent = 0;
let activePlayer = 0;

let currentScore = 0;
let holdScore = [0,0];

let newGame = function(){
    currentScore = 0;
    holdScore[0] = 0;
    holdScore[1] = 0;
    activePlayer = 0;

    if(!player0El.classList.contains('active-player')){
        console.log(!player0El.classList.contains('avtive-player'));
        player0El.classList.toggle('active-player');
        player1El.classList.toggle('active-player');
    }

    document.getElementById('current-score-0').textContent = 0;
    document.getElementById('current-score-1').textContent = 0;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;

}

const displayModal = function(){
    document.querySelector('.winner-modal').classList.remove('hidden')
    document.querySelector('.overlay').classList.remove('hidden')
}

const hideModal = function(){
    document.querySelector('.winner-modal').classList.add('hidden')
    document.querySelector('.overlay').classList.add('hidden')
}

rollEl.addEventListener('click', function(){
    let diceNum = Math.trunc(Math.random()*6)+1;
    diceEl.src = `images/d${diceNum}.png`;

    if(diceNum !== 1){
        currentScore += diceNum;
        document.getElementById(`current-score-${activePlayer}`).textContent = currentScore;
    }else{
        currentScore = 0;
        document.getElementById(`current-score-${activePlayer}`).textContent = currentScore;
        activePlayer = (activePlayer===0) ? 1 : 0;
        player0El.classList.toggle('active-player');
        player1El.classList.toggle('active-player');
    }
})

holdEl.addEventListener('click', function(){
    holdScore[activePlayer] += currentScore;
    if(holdScore[activePlayer] >= 50){
        displayModal();
        document.querySelector('.winner-msg').textContent = `Player ${activePlayer+1} Won!`
    }
    currentScore = 0;
    document.getElementById(`current-score-${activePlayer}`).textContent = currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = holdScore[activePlayer];
    activePlayer = (activePlayer===0) ? 1 : 0;
    player0El.classList.toggle('active-player');
    player1El.classList.toggle('active-player');
})

newGameEl.addEventListener('click', newGame)

document.querySelector('.close-btn').addEventListener('click', hideModal)