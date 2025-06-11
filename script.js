
const result = document.querySelector('.result')
const scoreHuman = document.getElementById('score')
const scoremachine = document.getElementById('scoremachine')
let scoreHumanN = 0
let scoreMachineN = 0

const choice = (human) => {
    game(human, choiceMachine())
    
    

}

const choiceMachine = () => {
    const choices = ['stone', 'paper', 'scissors'];
    const randomIdenx = Math.floor(Math.random() * 3);

    console.log(randomIdenx);
    return choices[randomIdenx];
}

const game = (human, machine) => {
    if (human === machine) {
        result.innerHTML = 'Empate!';
    } else if (human === 'stone' && machine === 'scissors' || 
               human === 'paper' && machine === 'stone' || 
               human === 'scissors' && machine === 'paper') {
        result.innerHTML = 'Você ganhou!'
        scoreHumanN++
        scoreHuman.innerHTML = scoreHumanN        
    } else {
        result.innerHTML = 'Você perdeu!'
        scoreMachineN++
        scoremachine.innerHTML = scoreMachineN      
    }
}