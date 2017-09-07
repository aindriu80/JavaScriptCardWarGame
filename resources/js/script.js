var suits = ["spades", "hearts", "clubs", "diams"];
var cardFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var cards = [];
var players = [[],[]];
var firstRun = true;
var fightButton = document.querySelector("#btnBattle");

// event listeners
fightButton.addEventListener('click',battle);

//functions
function battle(){
    if(firstRun){
        firstRun = false;
        buildCards();
        shuffleArray(cards);
    }
    console.log('works');
}

function buildCards(){
    cards = [];
    for(s in suits){
        var suitNew = suits[s][0].toUpperCase();
        for(n in cardFace){
            var card = {
                suit:suits[s],
                num:cardFace[n],
                cardValue:parseInt(n) +2,
                icon:suitNew
            }
            cards.push(card);
        }       
    }
     console.log(cards);
}

function shuffleArray(array){
    for(var x = array.length -1; x>0; x--){
        var ii = Math.floor(Math.random() * (x+1));
        var temp = array[x];
         array[x] = array[ii];
         arrayii = temp;
        
    }
    console.log(array);
    return array;
}