
        let playerScore = 0;
        let computerScore = 0;

        function playGame(playerChoice) {
            const choices = ['rock', 'paper', 'scissors'];
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            let result = '';
            if (playerChoice === computerChoice) {
                result = `It's a tie! You both chose ${playerChoice}.`;
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = `You win! ${playerChoice} beats ${computerChoice}.`;
                playerScore++;
            } else {
                result = `You lose! ${computerChoice} beats ${playerChoice}.`;
                computerScore++;
            }

            document.getElementById('result').innerText = result;
            document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
        }