$(document).ready(function () {
    var initialMouseX = 0;
    var initialMouseY = 0;
    var initialScrollX = 0;
    var initialScrollY = 0;
    var isDragging = false;

    $(document).on('mousedown', function (event) {
        initialMouseX = event.clientX;
        initialMouseY = event.clientY;
        initialScrollX = $(window).scrollLeft();
        initialScrollY = $(window).scrollTop();
        isDragging = true;

        // 마우스를 클릭했을 때 커서 모양을 바꾸기
        $('#trainLine').css('cursor', 'move');

        // 드래그 중에 다른 요소를 선택 못하게 하기
        $(document).on('selectstart dragstart', false);
    });

    $(document).on('mousemove', function (event) {
        if (isDragging) {
            var deltaX = event.clientX - initialMouseX;
            var deltaY = event.clientY - initialMouseY;
            $(window).scrollLeft(initialScrollX - deltaX);
            $(window).scrollTop(initialScrollY - deltaY);
        }
    });

    $(document).on('mouseup', function () {
        isDragging = false;

        $('#trainLine').css('cursor', 'auto');

        $(document).off('selectstart dragstart');
    });
});

