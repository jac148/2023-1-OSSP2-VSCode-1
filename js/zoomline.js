// 2023 06 07 호선별 기본 zoom값에 따른 새 js 작성
$(document).ready(function() {
    var scale = 2;
  
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



