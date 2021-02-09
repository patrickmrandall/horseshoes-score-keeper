const p1 = {
    score: 0,
    buttonPt: document.querySelector('#playerOneBtnPoint'),
    buttonLeaner: document.querySelector('#playerOneBtnLeaner'),
    buttonRinger: document.querySelector('#playerOneBtnRinger'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    buttonPt: document.querySelector('#playerTwoBtnPoint'),
    buttonLeaner: document.querySelector('#playerTwoBtnLeaner'),
    buttonRinger: document.querySelector('#playerTwoBtnRinger'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
let winningScore = 21;
let isGameOver = false;

function updateScoresPt(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
function updateScoresLeaner(player, opponent) {
    if (!isGameOver) {
        player.score += 2;
        if (player.score >= winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
function updateScoresRinger(player, opponent) {
    if (!isGameOver) {
        player.score += 3;
        if (player.score >= winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.buttonPt.addEventListener('click', function () {
    updateScoresPt(p1, p2)
})
p2.buttonPt.addEventListener('click', function () {
    updateScoresPt(p2, p1)
})
p1.buttonLeaner.addEventListener('click', function () {
    updateScoresLeaner(p1, p2)
})
p2.buttonLeaner.addEventListener('click', function () {
    updateScoresLeaner(p2, p1)
})
p1.buttonRinger.addEventListener('click', function () {
    updateScoresRinger(p1, p2)
})
p2.buttonRinger.addEventListener('click', function () {
    updateScoresRinger(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p1.score = 0;
        p2.score = 0;
        p1.display.textContent = 0;
        p2.display.textContent = 0;
        p1.display.classList.remove('has-text-danger', 'has-text-success');
        p2.display.classList.remove('has-text-danger', 'has-text-success');
        p1.button.disabled = false;
        p2.button.disabled = false;
    }
}