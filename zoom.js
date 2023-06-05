$(document).ready(function() {
    var scale = 1;

    $('#zoomInBtn').click(function() {
        console.log(scale);
        scale += 0.5;
        $('#trainLine').css('transform', 'scale(' + scale + ')');
    });

    $('#zoomOutBtn').click(function() {
        console.log(scale);
        if(scale !== 1){
            scale -= 0.5;
        }
        $('#trainLine').css('transform', 'scale(' + scale + ')');
    });

});