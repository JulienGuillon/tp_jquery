/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * player1Moves et player1Moves sont les tableaux contenant chaque case ou le joueur 1 ou 2 a joué
 * whoseTurn est une variable qui compte le nb de tours, et on regarde si c est pair ou impair pour determiner qui doit jouer
 */
 
var player1Moves = new Array;
var player2Moves = new Array;
var whoseTurn = 0;
var margin = 50;
var caseWidth = 50;
var caseHeight = 50;
var crossSize = 15;
var circleRadius = 15;

$(document).ready(function(){
    var myCanvas = document.getElementById("canvas");
    drawBase();
    myCanvas.addEventListener('click', function(evt){
        
        if (whoseTurn % 2 === 0){
            play(1, evt.clientX, evt.clientY);
        }
        else{
            play(2, evt.clientX, evt.clientY);
        }
    }, false);
    $('button').click(function(){
        resetGame();
    });
});


/*
 * draws the 9 cases to play
 */

function drawBase(){
    var myCanvas = document.getElementById("canvas");
    var myContext = myCanvas.getContext('2d');
	/*
	 * to complete
	 */

}

/*
 * checks which case is clicked and draws a circle
 * in its center
 * return the number of the case that was clicked (0 to 8)
 */

function drawCircleOnClick(x, y){
    var myCanvas = document.getElementById("canvas");
    var myContext = myCanvas.getContext('2d');
    var caseSelected;
	/*
	 * to complete
	 */
    
    return caseSelected;
}

/*
 * checks which case is clicked and draws a cross
 * in its center
 * returns the number of the case that was clicked (0 to 8)
 */

function drawCrossOnClick(x, y){
    var myCanvas = document.getElementById("canvas");
    var myContext = myCanvas.getContext('2d');
    var caseSelected;
	
	/*
	 * to complete
	 */
  
    return caseSelected;
}


/*
 * check if one of the winning combinaisons is in
 * the list passed as parameter
 */
function checkWin(moves){
    // first line
    if ($.inArray(0, moves) !== -1 && $.inArray(1, moves) !== -1 && $.inArray(2, moves) !== -1){
        return true;
    }
    // first column
    if ($.inArray(0, moves) !== -1 && $.inArray(3, moves) !== -1 && $.inArray(6, moves) !== -1){
        return true;
    }
    // first diagonale
    if ($.inArray(0, moves) !== -1 && $.inArray(4, moves) !== -1 && $.inArray(8, moves) !== -1){
        return true;
    }
    // second line
    if ($.inArray(3, moves) !== -1 && $.inArray(4, moves) !== -1 && $.inArray(5, moves) !== -1){
        return true;
    }
    // second column
    if ($.inArray(1, moves) !== -1 && $.inArray(4, moves) !== -1 && $.inArray(7, moves) !== -1){
        return true;
    }
    // third line
    if ($.inArray(6, moves) !== -1 && $.inArray(7, moves) !== -1 && $.inArray(8, moves) !== -1){
        return true;
    }
    // third column
    if ($.inArray(2, moves) !== -1 && $.inArray(5, moves) !== -1 && $.inArray(8, moves) !== -1){
        return true;
    }
    // second diagonale
    if ($.inArray(2, moves) !== -1 && $.inArray(4, moves) !== -1 && $.inArray(6, moves) !== -1){
        return true;
    }
    return false;
}


/*
 * check which player turn it is and displays a 
 * circle or a cross where he clicked according to it
 */
function play(player, x, y){
    var p = document.getElementById('text');
    if (player === 1){
        if (!checkWin(player2Moves)){
            // add clicked case to the list of cases of the player
            player1Moves[player1Moves.length] = drawCircleOnClick(x, y);
            if (checkWin(player1Moves)){
                alert("victoire joueur 1 !!");
                p.innerHTML = 'victoire joueur 1 !!';
            }
            else{
                p.innerHTML = 'tour du joueur 2';
            }
        }
    }
    if (player === 2){
        if (!checkWin(player1Moves)){
            // add clicked case to the list of cases of the player
            player2Moves[player2Moves.length] = drawCrossOnClick(x, y);
            if (checkWin(player2Moves)){
                alert("victoire joueur 2 !!");
                p.innerHTML = 'victoire joueur 2 !!';
            }
            else{
                p.innerHTML = 'tour du joueur 1';
            }
        }
    }
    whoseTurn++;
    
}

/*
 * redraws an empty game and resets the lists
 */
function resetGame(){
    var myCanvas = document.getElementById("canvas");
    var myContext = myCanvas.getContext('2d');
    var p = document.getElementById('text');
    player1Moves = new Array;
    player2Moves = new Array;
    whoseTurn = 0;
    /*
	 * to complete
	 */
    drawBase();
    p.innerHTML = 'tour du joueur 1';
}