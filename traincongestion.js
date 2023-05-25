function livecongestion_info(l_Number, trainNo) {
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', appkey: 'WCfyvYzuLu6HjI65CWiMe4ApH0zgqk9Y5dUoFRet' }
    };

    const url = `https://apis.openapi.sk.com/puzzle/congestion-train/rltm/trains/${l_Number}/${trainNo}`;
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            // console.log(`열차 번호: ${data.trainNo}`);
            console.log(`혼잡도: ${data.congestion}`);
            console.log(`업데이트 시간: ${data.updateTime}`);
        })
        .catch(error => {
            console.error(error);
        });
}