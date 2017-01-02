$(function() {
    // use 'mousedown' to use it on browser
    $('canvas').on('touchstart', function(e){
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
        
    
function drawCircle(cx, cy)
{
    // draw circle at position (cx,cy)
}
    
function drawRect(cx, cy)
{
    // draw rectangle at position (cx,cy)
}
    
function drawText(cx, cy, t)
{
   // add text t at position (cx,cy)
}
    
function drawImage(cx, cy)
{
    // show image at position (cx,cy)
}

// add function getCursorPosition and getTouchPosition
