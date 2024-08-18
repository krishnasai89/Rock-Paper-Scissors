const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        displayResult(playerChoice, computerChoice, winner);
    });
});

let getComputerChoice = () => {
    const choices = ['rock✊', 'paper✋', 'scissors✌️'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let determineWinner = (player, computer) => {
    if (player === computer) {
        return 'It\'s a tie!';
    } else if (
        (player === 'rock✊' && computer === 'scissors✌️') ||
        (player === 'paper✋' && computer === 'rock✊') ||
        (player === 'scissors✌️' && computer === 'paper✋')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

let displayResult = (player, computer, result) => {
    resultText.textContent = `You chose ${player}, computer chose ${computer}. ${result}`;
}
