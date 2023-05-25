function train_loc_info(l_Number) {
    const url = `http://swopenAPI.seoul.go.kr/api/subway/7863754c4966726538305a5a596f69/xml/realtimePosition/0/5/${l_Number}호선`;
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');
        const stations = xmlDoc.getElementsByTagName('row');
        const list = document.getElementById('row');
        for (let i = 0; i < stations.length; i++) {
            const station = stations[i];
            // const lastRecptnDt = station.getElementsByTagName('lastRecptnDt')[0].textContent; - 데이터 수신 날짜
            const recptnDt = station.getElementsByTagName('recptnDt')[0].textContent; // 데이터 수신 시간 (날짜포함)
            const trainNo = station.getElementsByTagName('trainNo')[0].textContent; // 지하철 열차 번호
            const statnNm = station.getElementsByTagName('statnNm')[0].textContent; // 지하철 역 이름
            const statnTnm = station.getElementsByTagName('statnTnm')[0].textContent; // 지하철 종착역 이름
            const updnLine = station.getElementsByTagName('updnLine')[0].textContent; // 상하행 구분
            let updnText = '';
            switch(updnLine) {
                case '0':
                    updnText = '상행/내선';
                    break;
                case '1':
                    updnText = '하행/외선';
                    break;
                default:
                    updnText= '알 수 없음';
            }
            const trainSttus = station.getElementsByTagName('trainSttus')[0].textContent; // 지하철 진입 정보 구분
            let statusText = '';
            switch (trainSttus) {
                case '0':
                    statusText = '진입중';
                    break;
                case '1':
                    statusText = '도착';
                    break;
                case '2':
                    statusText = '출발';
                    break;
                case '3':
                    statusText = '전역출발';
                    break;
                default:
                    statusText = '알 수 없음';
            }
            //   const li = document.createElement('li');
            //   li.textContent = `${trainNo} - ${statnNm}`;
            //   list.appendChild(li);
            console.log(`최종 정보 수신 시간 : ${recptnDt}`);
            console.log(`지하철 정보: ${updnText} / ${trainNo} - ${statnNm} / ${statusText}`);
            console.log(`지하철 종착역: ${statnTnm}`);
            /*switch (l_Number) {
                case '2' :
                    livecongestion_info(l_Number, trainNo)
                    break;
                case '3' :
                    livecongestion_info(l_Number, trainNo)
                    break;
                default:
                    break;
            } */  //주석 처리한부분 -> 혼잡도 연계 시도
        }
      })
      .catch(error => {
        console.error(error);
      });
  }