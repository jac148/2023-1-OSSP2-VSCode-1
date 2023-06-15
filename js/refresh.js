let intervalId; // setInterval 함수의 반환 값

function startUpdatingSubwayLocation(l_Number) {
  // 이전에 실행 중인 interval을 제거하여 초기화합니다.
  clearInterval(intervalId);

  // 처음 호선 클릭 시 즉시 전철 위치를 업데이트합니다.
  updateSubwayLocation(l_Number);

  // 10초마다 interval을 설정하여 train_loc_info() 함수를 호출하여 전철 위치를 갱신합니다.
  intervalId = setInterval(function() {
    // 전철 위치를 초기화하기 위해 기존 위치를 삭제합니다.
    removeSubwayLocation();
    updateSubwayLocation(l_Number);
  }, 10000);
}

function updateSubwayLocation(l_Number) {
  train_loc_info(l_Number);
}

function removeSubwayLocation() {
  const subwayElements = document.getElementsByClassName("subway_ico");
  // 모든 전철 위치 요소를 삭제합니다.
  while (subwayElements.length > 0) {
    subwayElements[0].remove();
  }
}
