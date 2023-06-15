async function statisticcongestion_info(stationID,day,sHour) {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', appkey: 'WCfyvYzuLu6HjI65CWiMe4ApH0zgqk9Y5dUoFRet'}
    };
    
    const STAT = window.location.hostname === 'localhost' ? '' : '/stat';
    const url = `${STAT}/puzzle/congestion-train/stat/stations/${stationID}?dow=${day}&hh=${sHour}`
    
    try {
        const response = await fetch(url,options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}
