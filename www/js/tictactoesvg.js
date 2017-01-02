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
    var topLeftSquare = document.getElementById("topleft");
    var topMiddleSquare = document.getElementById("topmiddle");
    var topRightSquare = document.getElementById("topright");
    
    var middleLeftSquare = document.getElementById("middleleft");
    var middleMiddleSquare = document.getElementById("middlemiddle");
    var middleRightSquare = document.getElementById("middleright");
    
    var bottomLeftSquare = document.getElementById("bottomleft");
    var bottomMiddleSquare = document.getElementById("bottommiddle");
    var bottomRightSquare = document.getElementById("bottomright");
    
    topLeftSquare.addEventListener('click', function(evt){
        if (whoseTurn % 2 === 0){
            play(1, evt.clientX, evt.clientY);
        }
        else{
            play(2, evt.clientX, evt.clientY);
        }
    }, false);
    
    topMiddleSquare.addEventListener('click', function(evt){
        if (whoseTurn % 2 === 0){
            play(1, evt.clientX, evt.clientY);
        }
        else{
            play(2, evt.clientX, evt.clientY);
        }
    }, false);
    
    topRightSquare.addEventListener('click', function(evt){
        if (whoseTurn % 2 === 0){
            play(1, evt.clientX, evt.clientY);
        }
        else{
            play(2, evt.clientX, evt.clientY);
        }
    }, false);
    
    middleLeftSquare.addEventListener('click', function(evt){
        if (whoseTurn % 2 === 0){
            play(1, evt.clientX, evt.clientY);
        }
        else{
            play(2, evt.clientX, evt.clientY);
        }
    }, false);
    
    middleMiddleSquare.addEventListener('click', function(evt){
        if (whoseTurn % 2 === 0){
            play(1, evt.clientX, evt.clientY);
        }
        else{
            play(2, evt.clientX, evt.clientY);
        }
    }, false);
    
    middleRightSquare.addEventListener('click', function(evt){
        if (whoseTurn % 2 === 0){
            play(1, evt.clientX, evt.clientY);
        }
        else{
            play(2, evt.clientX, evt.clientY);
        }
    }, false);
    
    bottomLeftSquare.addEventListener('click', function(evt){
        if (whoseTurn % 2 === 0){
            play(1, evt.clientX, evt.clientY);
        }
        else{
            play(2, evt.clientX, evt.clientY);
        }
    }, false);
    
    bottomMiddleSquare.addEventListener('click', function(evt){
        if (whoseTurn % 2 === 0){
            play(1, evt.clientX, evt.clientY);
        }
        else{
            play(2, evt.clientX, evt.clientY);
        }
    }, false);
    
    bottomRightSquare.addEventListener('click', function(evt){
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

function drawCircleOnClick(x, y){

    var caseSelected;
 
	/*
	 * to complete
	 */
 
    return caseSelected;
}


function drawCrossOnClick(x, y){

    var caseSelected;
	
	/*
	 * to complete
	 */
	
    return caseSelected;
}


function play(player, x, y){
    var p = document.getElementById('text');
    if (player === 1){
        if (!checkWin(player2Moves)){
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
    
    var p = document.getElementById('text');
    player1Moves = new Array;
    player2Moves = new Array;
    whoseTurn = 0;
    
	/*
	 * to complete 
	 */
    p.innerHTML = 'tour du joueur 1';
}