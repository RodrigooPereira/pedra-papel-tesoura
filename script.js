/*
PEDRA = 0
PAPEL = 1 
TESOURA = 2
*/

let playerScore = 0;
let pcScore = 0;

document.getElementById('player_score').innerHTML = playerScore;
document.getElementById('pc_score').innerHTML = pcScore;

function pedra() {
    document.getElementById('resultado_final').innerHTML = '';
    let computador = Math.floor(Math.random() * 3);

    if (computador == 0) {
        console.log('Empate');
    } if (computador == 1) {
        pcScore += 1;
    } if (computador == 2) {
        playerScore += 1;
    }

    if (pcScore == 5) {
        document.getElementById('resultado_final').innerHTML = 'Computador venceu';
        playerScore = 0;
        pcScore = 0;
    } if (playerScore == 5){
        document.getElementById('resultado_final').innerHTML = 'Jogador venceu';
        playerScore = 0;
        pcScore = 0;
    }
    
    document.getElementById('player_score').innerHTML = playerScore;
    document.getElementById('pc_score').innerHTML = pcScore;
}

function papel() {
    document.getElementById('resultado_final').innerHTML = '';
    let computador = Math.floor(Math.random() * 3);

    if (computador == 0) {
        playerScore += 1;
    } if (computador == 1) {
        console.log('Empate');
    } if (computador == 2) {
        pcScore += 1;
    }

    if (pcScore == 5) {
        document.getElementById('resultado_final').innerHTML = 'Computador venceu';
        playerScore = 0;
        pcScore = 0;
    } if (playerScore == 5){
        document.getElementById('resultado_final').innerHTML = 'Jogador venceu';
        playerScore = 0;
        pcScore = 0;
    }

    document.getElementById('player_score').innerHTML = playerScore;
    document.getElementById('pc_score').innerHTML = pcScore;

}

function tesoura() {
    document.getElementById('resultado_final').innerHTML = '';
    let computador = Math.floor(Math.random() * 3);

    if (computador == 0) {
        pcScore +=1;
    } if (computador == 1) {
        playerScore += 1;
    } if (computador == 2) {
        console.log('Empate');
    }

    if (pcScore == 5) {
        document.getElementById('resultado_final').innerHTML = 'Computador venceu';
        playerScore = 0;
        pcScore = 0;
    } if (playerScore == 5){
        document.getElementById('resultado_final').innerHTML = 'Jogador venceu';
        playerScore = 0;
        pcScore = 0;
    }

    document.getElementById('player_score').innerHTML = playerScore;
    document.getElementById('pc_score').innerHTML = pcScore;

}

