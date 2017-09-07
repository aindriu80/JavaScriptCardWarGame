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
        console.log(cards);
    }
}