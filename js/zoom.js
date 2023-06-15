$(document).ready(function() {
    var scale = 1;
  
    $('#zoomInBtn').click(function() {
        scale += 1;
        console.log(scale);
        $('#trainLine').css('transform', 'scale(' + scale + ')');
    });

    $('#zoomOutBtn').click(function() {
        if(scale !== 1){
            scale -= 1;
            console.log(scale);
        }
        else {
            console.log(scale);
        }
        $('#trainLine').css('transform', 'scale(' + scale + ')');
        
    });
});



