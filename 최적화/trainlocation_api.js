function train_loc_info(l_Number) {
    const url = `http://swopenAPI.seoul.go.kr/api/subway/7863754c4966726538305a5a596f69/xml/realtimePosition/0/5/${l_Number}호선`;
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');
        const stations = xmlDoc.getElementsByTagName('row');
        const list = document.getElementById('station-list');
        for (let i = 0; i < stations.length; i++) {
            const station = stations[i];
            const trainNo = station.getElementsByTagName('trainNo')[0].textContent;
            const statnNm = station.getElementsByTagName('statnNm')[0].textContent;
            //   const li = document.createElement('li');
            //   li.textContent = `${trainNo} - ${statnNm}`;
            //   list.appendChild(li);
            console.log(`${trainNo} - ${statnNm}`);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }