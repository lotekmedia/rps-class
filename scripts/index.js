//Main JavaScript Code
$(document).ready(function(){
    console.log('loaded');
    $('#playGame').on('click',playGame);
    $('.image').on('click',selectItem);
});

var userChoice = '';

function selectItem(event){
    userChoice = event.currentTarget.dataset.value;
    $('.selected').removeClass('selected');
    $(event.currentTarget).addClass('selected');
}

function playGame(event){
    
    var options = ['rock','paper','scissors'];
    
    var cpuChoice = options[Math.floor(Math.random()*options.length)];

    display('');

    if (userChoice === cpuChoice){
        display('Tie');
    }
    else if (userChoice === 'scissors' && cpuChoice === 'rock'){
        display('CPU picked rock - CPU WINS');
    }    
    else if (userChoice === 'scissors' && cpuChoice === 'paper'){
        display('CPU picked paper - YOU WIN');
    }    
    else if (userChoice === 'paper' && cpuChoice === 'rock'){
        display('CPU picked rock - YOU WIN');
    }    
    else if (userChoice === 'paper' && cpuChoice === 'scissors'){
        display('CPU picked scissors - CPU WINS');
    }    
    else if (userChoice === 'rock' && cpuChoice === 'scissors'){
        display('CPU picked scissors - YOU WIN');
    }    
    else if (userChoice === 'rock' && cpuChoice === 'paper'){
        display('CPU picked paper - CPU WINS');
    }
    else{
        display('Someone won?');
    }    

}

function display(textToDisplay){
    $('#results').html(textToDisplay);
}

//Pseudo Code
/*

Ask for a choice of Rock Paper Scissors from User

Generate Random Computer Value of Rock, Paper, Scissors

Compare Two Values

If Rock and Paper -> Paper Wins
If Rock and Scissors -> Rock Wins
If Scissors and Paper -> Scissors Wins
If Both are Same -> Tie

Display Winner, Loser, or Tie 

*/
