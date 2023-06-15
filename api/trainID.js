// 클릭 이벤트 핸들러 함수
function handleClick(event) {
  // 클릭한 역의 id 속성 값 가져오기
  var id = event.currentTarget.getAttribute("id");

  // id 출력 (여기서는 콘솔에 출력하도록 함)
  console.log(id);
}

function updateCongestion(congestionCar, congestionTrain, dom) {
  var congestionType = '';
  console.log(congestionCar);
  console.log(congestionTrain);


  var carTable = $("#carTable");
  var trainTable = $("#trainTable");
  carTable.empty(); // 테이블 초기화

  var row = $("<tr>");
  var counter = 1; // 카운트
  $.each(congestionCar, function(index, value) {
      var color = "#C5E0B4"; // 색 초기화
      if (value > 34 && value <= 99) {
          color = "#FFE699";
      } else if (value > 99 && value <= 150) {
          color = "#F4B183";
      } else if (value > 150) {
          color = "#FF0000";
      }
      //숫자를 중앙에 배치
      var numberSpan = $("<span>").text(counter).css({"display": "flex","align-items": "center","justify-content":"center"});
      row.append($("<td>").css({"background-color": color, "width": "30px", "height": "30px"}).append(numberSpan));
      counter++;
  });
  carTable.html(row);
  carTable.css({
      "margin-left": "auto",
      "margin-right": "auto",
      "display": "table",
      "table-layout": "fixed",
      "width": "90%"
  });

  var trainRow = trainTable.find("tr").first();
      if (congestionTrain > 34 && congestionTrain <= 99) {
        congestionTrain = '좋음';
      } else if (congestionTrain > 100 && congestionTrain <= 150) {
        congestionTrain = '혼잡';
      } else if (congestionTrain > 150) {
        congestionTrain = '혼잡';
      } else {
        congestionTrain = '쾌적';
      }
  
  let trainSttusTerm = 0 ;
  if(dom.attr('trainSttus') == 0){
    trainSttusTerm = '진입중';
  } else if(dom.attr('trainSttus') == 1) {
    trainSttusTerm = '도착';
  } else {
    trainSttusTerm = '출발';
  }
  console.log(dom);
  let trainInfo = $("<tr>").text("운행정보: " + (dom.attr('updnLine') == 0 ? '상행/내선' : '하행/외선'));
  let trainStatus = $("<tr>").text("현재 열차 상태: " + trainSttusTerm);
  let trainLocation = $("<tr>").text("열차 위치: " + dom.attr('statnNm') + '역');
  let trainCongestion = $("<tr>").text("열차전체혼잡도: " + congestionTrain);
  
  trainRow.append(trainInfo, trainStatus, trainLocation, trainCongestion);
  
}



$(document).ready(function() {

  $(document).on('click', '.subway_ico', function() {
    if(subwayLineNumber != 2 && subwayLineNumber != 3) return false;
    var trainNo = $(this).attr('trainNo')
    console.log(trainNo);
    
    let dom = $(this);
    let data = {};
    var congestionCar = {};
    var congestionTrain = '';
    var congestionType = '';
    livecongestion_info(subwayLineNumber, trainNo).then(function(result) {
      console.log(result.data.congestionResult.congestionCar);
      console.log(result.data.congestionResult.congestionTrain);
      congestionCar = result.data.congestionResult.congestionCar;
      congestionTrain= result.data.congestionResult.congestionTrain;
      updateCongestion(congestionCar.split("|"), congestionTrain, dom);
    });
    
    $("#modal_title").text(`${subwayLineNumber}호선 ${trainNo} 번 열차`);
    $('#myModal').css('display', 'block');
 
  });
  
  $('.close').click(function() {
    $('#myModal').css('display', 'none');
    $("#trainTable").html(`<tr><td>
    </td></tr>`);
    $("#carTable").empty();
  });
  });



// 환승역 요소 선택
var interchange = document.querySelector(".interchange");
// 기존역 요소 선택
var markers = document.querySelectorAll(".marker");

var currents = document.querySelectorAll(".current");

// 클릭 이벤트 핸들러 추가
interchange.addEventListener("click", handleClick);
markers.forEach(function(marker) {
  marker.addEventListener("click", handleClick);
});
currents.forEach(function(current) {
  currents.addEventListener("click", handleClick);
});


