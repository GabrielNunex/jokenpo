const jo = document.querySelector('.jo');
const ken = document.querySelector('.ken');
const po = document.querySelector('.po');
const front = document.querySelector('.front');
const btnRules = document.querySelector('.rules_btn');
const textRules = document.querySelector('.rules_text');
const  cardRock = document.querySelector('.card_rock');
const CRInfo = document.querySelector('.card_rock-info');
const  cardPaper = document.querySelector('.card_paper');
const CPInfo = document.querySelector('.card_paper-info');
const  cardScissor = document.querySelector('.card_scissor');
const CSInfo = document.querySelector('.card_scissors-info');
const cancel = document.querySelectorAll('.cancel');


//Functions to hidde and Show elements

function invisible (element) {
    element.classList.add('invisible');
}

function show (element) {
    element.classList.remove('invisible');
}

function hidden (element) {
    element.classList.add('hidden');
}

function creat (element) {
    element.classList.remove('hidden');
}

//Time to show elements on the front page

setTimeout(() => {
    show (jo);
}, 600);

setTimeout(() => {
    show (ken);
}, 1200);

setTimeout(() => {
    show (po);
}, 1800);

//Hidden the front page
   
front.addEventListener ('click', () => {
   hidden(front)
})
   
setTimeout(() => {
   hidden(front);
}, 3000);

//Show and close the cards

cancel[0].addEventListener('click', () => {
    hidden(CPInfo);
    hidden(CSInfo);
    hidden(CRInfo);
    creat(cardPaper);
    creat(cardRock);
    creat(cardScissor);
});

cancel[1].addEventListener('click', () => {
    hidden(CPInfo);
    hidden(CSInfo);
    hidden(CRInfo);
    creat(cardPaper);
    creat(cardRock);
    creat(cardScissor);
});

cancel[2].addEventListener('click', () => {
    hidden(CPInfo);
    hidden(CSInfo);
    hidden(CRInfo);
    creat(cardPaper);
    creat(cardRock);
    creat(cardScissor);
});

cardRock.addEventListener('click', () => {
    hidden(cardPaper);
    hidden(cardScissor);
    creat(CRInfo);
});

cardPaper.addEventListener('click', () => {
    hidden(cardRock);
    hidden(cardScissor);
    creat(CPInfo);
});

cardScissor.addEventListener('click', () => {
    hidden(cardRock);
    hidden(cardPaper);
    creat(CSInfo);
})

//Show and close the rules

btnRules.addEventListener ('click', () => {
    show(textRules);
})

textRules.addEventListener ('click', () => {
    invisible(textRules);
})

