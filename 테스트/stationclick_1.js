var clicktest = document.getElementById("M1916");
clicktest.onclick=function(){
    var stationID=clicktest.getAttribute("stationID");
    console.log("소요산 역의 역코드:",stationID);
}