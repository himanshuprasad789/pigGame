


var Scores,RoundScore,activePlayer,dice,gamePlayingState;

init();//set variables to zero,hide dice image,change ui scores  to 0

// dice=Math.floor(Math.random()*6)+1;
// console.log(dice); 
//document.querySelector('#current-score-' + activePlayer).textContent=dice;
// document.querySelector('#current-score-'+activePlayer).innerHTML='<em>' + dice + '<em>';


//document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click',roll);

document.querySelector('.btn-hold').addEventListener('click',function(){
     if(gamePlayingState){
       //Update the global result
    Scores[activePlayer]+=RoundScore;

    //UPDATED THE UI
    document.querySelector('#score-' + activePlayer ).textContent= Scores[activePlayer]; 

    //CHECK IF PLAYER HAS WON THE GAME
    if(Scores[activePlayer]>=100){
        document.querySelector('#name-'+activePlayer).textContent='WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
        document.getElementById('current-score-0').innerHTML=0; 
        document.getElementById('current-score-1').innerHTML=0; 
        gamePlayingState=false;
    }
    else{
        //NEXT PLAYER
        nextPlayer();
    }
     }
    
    
    
});

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    gamePlayingState=true;
    activePlayer=0;
    Scores=[0,0];
    RoundScore=0;

    document.querySelector('.dice').style.display= 'none';
    
    document.getElementById('score-0').innerHTML=0; 
    document.getElementById('score-1').innerHTML=0; 
    document.getElementById('current-score-0').innerHTML=0; 
    document.getElementById('current-score-1').innerHTML=0; 
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



function nextPlayer(){
    //next player turn      
    activePlayer === 0? activePlayer=1: activePlayer=0;   
    RoundScore=0;
    document.getElementById('current-score-0').textContent='0';
    document.getElementById('current-score-1').textContent='0';

    //changing active class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';

    

}
function roll(){
    if(gamePlayingState){
     // random number
    var dice=Math.floor(Math.random()*6)+1;

    //update the dice image
    var diceDom=document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src = 'dice-' + dice + '.png';

    //update the ROUND SCORE if dice roll is not 1
    if(dice >1){

        //add score
        RoundScore+=dice;
        document.querySelector('#current-score-' + activePlayer).textContent=RoundScore;
    }
    else{
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        //next player turn
        nextPlayer();                        
    }

  }
    
}
