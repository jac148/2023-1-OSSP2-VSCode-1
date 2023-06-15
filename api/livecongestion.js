async function livecongestion_info(l_Number, trainNo) {
  const options = {
      method: 'GET',
      headers: { accept: 'application/json', appkey: 'WCfyvYzuLu6HjI65CWiMe4ApH0zgqk9Y5dUoFRet' }
  };
  const CONG = window.location.hostname === 'localhost' ? '' : '/cong';
  const url = `${CONG}/puzzle/congestion-train/rltm/trains/${l_Number}/${trainNo}`;
  
  try {
      const response = await fetch(url, options);
      const data = await response.json();

      console.log(`열차 번호: ${data.trainNo}`);
      console.log(`혼잡도: ${data.congestion}`);
      console.log(`업데이트 시간: ${data.updateTime}`);

      return data;  
  } catch (error) {
    return {
        congestionCar: "4|8|3|5|1|1|3|7".split("|").map(Number),
        congestionTrain: "5",
        congestionType: 2
    };
  }
}
