$(function() {
    // draw a circle on canvas
    $('canvas');

    $('#svgbasics').svg({onLoad: drawInitial});
    $('circle').draggable({
        drag: function(event, ui) {
            // complete drag function
                        
            // get html of svg element and update it below the element 
        }
    }); 
});

// complete function drawInitial for svg to draw a circle
function drawInitial(svg) {

    // add a script to increase size of circle
    svg.script('function circleClick(evt) {\n'
        // complete
        '}', 'text/ecmascript');

    // get html of canvas element and display it below the element
            
    // get html of svg element and display it below the element 
}

