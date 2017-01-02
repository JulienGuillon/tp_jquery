$(function() {
    $('#svgbasics').svg({onLoad: drawInitial});
    $('#valider').click(function() {
        $('circle').attr('transform', 'translate(10,10)');
    });
 
 // functions to enable drag of objects   
    $('rect').draggable({
        drag: function(event, ui) {
            var position = ui.position;
            var x = $(this).attr('x').val;
            var y = $(this).attr('y').val;
            
            $(this).attr('x', position.left);
            $(this).attr('y', position.top);
        }
    });
    
    // look at function above and make function to enable drag circle
    $('circle').draggable({
        
    });
    
 // functions to double size of objects on click    
    $("#svgbasics circle").on('touchstart', function(event) {

    });
    
    $("#svgbasics rect").on('touchstart', function(event) {
        
    });
    
    
    var startX;
    var startY;
    var x;
    var y;
    var clicked = 0;
    $('#svgbasics').on('touchstart', function(e){
        var draw = $('input[name="draw"]:checked').val();
        var text = $('input[name="text"]').val();
        if (draw == "Circle")
        {

        }
        else if (draw == "Image")
        {

        }
        else if (draw == "Rectangle")
        {

        }
        else if (draw == "Text")
        {

        }
    });
});

function getTouchPos(svg, event)
{
    var loc = event.originalEvent.changedTouches[0];
    var rect = svg.getBoundingClientRect();
    var x = loc.clientX - rect.left;
    var y = loc.clientY - rect.top;
    return [x, y];
}

 // functions to draw objects on click on svg element
function drawRect(cx, cy)
{
      
}

function drawImage(cx, cy)
{

}

function drawCircle(cx, cy)
{
    
}

