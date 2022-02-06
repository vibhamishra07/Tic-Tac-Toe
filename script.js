let musicGameOver = new Audio("gameover.mp3");
let musicTurn = new Audio("ting.mp3");
let turns = "X";

let isGameOver = false;

const turnChange = () => {
    if (turns === 'X') {
        return turns = 'O';
    }
    return turns = 'X';

}
const checkWin = (cwin) => {
    let A1 = document.getElementById('boxtext-1');
    let A2 = document.getElementById('boxtext-2');
    let A3 = document.getElementById('boxtext-3');
    let A4 = document.getElementById('boxtext-4');
    let A5 = document.getElementById('boxtext-5');
    let A6 = document.getElementById('boxtext-6');
    let A7 = document.getElementById('boxtext-7');
    let A8 = document.getElementById('boxtext-8');
    let A9 = document.getElementById('boxtext-9');
    if ((A1.innerText === A2.innerText && A2.innerText === A3.innerText && A1.innerText !== '') || (A4.innerText === A5.innerText && A5.innerText === A6.innerText && A4.innerText !== '') || (A7.innerText === A8.innerText && A8.innerText === A9.innerText && A7.innerText !== '') || (A1.innerText === A4.innerText && A4.innerText === A7.innerText && A1.innerText !== '') || (A2.innerText === A5.innerText && A5.innerText === A8.innerText && A2.innerText !== '') || (A3.innerText === A6.innerText && A6.innerText === A9.innerText && A3.innerText !== '') || (A1.innerText === A5.innerText && A5.innerText === A9.innerText && A1.innerText !== '') || (A3.innerText === A5.innerText && A5.innerText === A7.innerText && A3.innerText !== '')) {
        document.getElementsByClassName('turn')[0].innerHTML = "Congrates! " + cwin + " Win";
        isGameOver = true;
        musicGameOver.play();
        document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "100px";
    }
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.innerBox');
    element.addEventListener('click', () => {
        if (boxtext.innerHTML === '') {
            boxtext.innerHTML = turns;
            var cwin = turns;
            turns = turnChange();
            musicTurn.play();
            if (isGameOver === false) {
                checkWin(cwin);
            }
            if (isGameOver === false) {
                document.getElementsByClassName('turn')[0].innerHTML = "The turn of " + turns;

            }
        }

    })
})
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {

    let boxtexts = document.querySelectorAll('.innerBox');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turns = "X";
    isGameOver = false;
    document.getElementsByClassName('turn')[0].innerHTML = "The turn of " + turns;
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "0";

})
