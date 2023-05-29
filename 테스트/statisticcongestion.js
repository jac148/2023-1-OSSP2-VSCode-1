function statisticcongestion_info(stationID,day,sHour) {
    
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', appkey: 'WCfyvYzuLu6HjI65CWiMe4ApH0zgqk9Y5dUoFRet'}
        };

    const url = `https://apis.openapi.sk.com/puzzle/congestion-train/stat/stations/${stationID}?dow=${day}&hh=${sHour}`
    fetch(url,options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    }