const pRock = document.querySelector('.card_rock');
const pPaper = document.querySelector('.card_paper');
const pScissors = document.querySelector('.card_scissor');
const confirm = document.querySelectorAll('.btn_confirm');
const info = document.querySelectorAll('.card_info');
const boxCards = document.querySelector('.cards');
const rules = document.querySelector('.rules');
const lose = new Audio ('./assets/sounds/lose.mp3')
const win = new Audio ('./assets/sounds/win.mp3')
const draw = new Audio ('./assets/sounds/draw.mp3')

//Variations: Rock == 0; Paper == 1; Scissors == 2.

// Recives information from the player
let pChoice;

pRock.addEventListener('click', () => {
    return pChoice = 0;
});

pPaper.addEventListener('click', () => {
    return pChoice = 1;
});

pScissors.addEventListener('click', () => {
    return pChoice = 2;
});


//calculate pc probability
let cChoice = Math.floor(Math.random() * 3);

// Creat enemy card
function newCard (type) {
    if (type == 0) {
        const vs = document.createElement('p');
        vs.classList.add('title2');
        vs.innerHTML = `X`;
        boxCards.append(vs);
        
        const newCardRock = document.createElement('div');
        newCardRock.classList.add('card_rock');
        newCardRock.innerHTML = `<img src="./assets/pedra.png" alt="Mão como simbolo de papel" class="rock_img">
        <h3 class="rock_title">Pedra <br> <span class="rock_title2">Rock</span></h3>`; 
        boxCards.append(newCardRock);
    } else if (type == 1) {
        const vs = document.createElement('p');
        vs.classList.add('title2');
        vs.innerHTML = `X`;
        boxCards.append(vs);
        
        const newCardpaper = document.createElement('div');
        newCardpaper.classList.add('card_paper');
        newCardpaper.innerHTML = `<img src="./assets/papel.png" alt="Mão como simbolo de papel" class="paper_img">
        <h3 class="paper_title">Papel <br> <span class="paper_title2">Paper</span></h3>`;
        boxCards.append(newCardpaper);
    } else {
        const vs = document.createElement('p');
        vs.classList.add('title2');
        vs.innerHTML = `X`;
        boxCards.append(vs);
        
        const newCardscissor = document.createElement('div');
        newCardscissor.classList.add('card_scissor');
        newCardscissor.innerHTML = `<img src="./assets/tesoura.png" alt="Mão como simbolo de Tesoura" class="scissor_img">
        <h3 class="scissor_title">Tesoura <br> <span class="scissor_title2">Scissors</span></h3>`;
        boxCards.append(newCardscissor);
    }
}

//Game resolution
function playRockPaperScissor(player1, player2)  {
    if ((player1 == 2 && player2 == 1) || (player1 == 1 && player2 == 0) || (player1 == 0 && player2 == 2)) {
        win.play()
        
         return "🎉 Você Ganhou, Parabéns! 🕺";
     } else if ((player2 == player1)) {
        draw.play()
         return "Ocorreu um empate! 😧";
     }
     lose.play()
     return "O Computador ganhou! 😭"
}

confirm[0].addEventListener('click', () => {
    const resultado = playRockPaperScissor(pChoice, cChoice);
    
    info[0].classList.add('hiddenP');

    newCard(cChoice);
    
    rules.innerHTML = `
    <div class="restart">
    <p class="end_msg">${resultado}</p>
    <a href="index.html" class="restart_msg">Restart ?</a>
    </div>
    `;
});

confirm[1].addEventListener('click', () => {
    const resultado = playRockPaperScissor(pChoice, cChoice);
    console.log(`Você escolheu ${pChoice}, equanto o Computador escolheu ${cChoice} e por isso ${resultado}`);

    info[1].classList.add('hiddenP');

    newCard(cChoice);
    
    rules.innerHTML = `
    <div class="restart">
    <p class="end_msg">${resultado}</p>
    <a href="index.html" class="restart_msg">Restart ?</a>
    </div>
    `;
});

confirm[2].addEventListener('click', () => {
    const resultado = playRockPaperScissor(pChoice, cChoice);
    console.log(`Você escolheu ${pChoice}, equanto o Computador escolheu ${cChoice} e por isso ${resultado}`);

    info[2].classList.add('hiddenP');

    newCard(cChoice);
    
    rules.innerHTML = `
    <div class="restart">
    <p class="end_msg">${resultado}</p>
    <a href="index.html" class="restart_msg">Restart ?</a>
    </div>
    `;
});