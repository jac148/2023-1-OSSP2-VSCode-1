// Get the current zoom level of the website
var currentZoom = 1;


document.addEventListener("mousedown", function(event) {
  
  if (event.button == 2) {
    var startX = event.clientX;
    var startY = event.clientY;

    document.addEventListener("mousemove", zoom);
    document.addEventListener("mouseup", function() {
      document.removeEventListener("mousemove", zoom);
    });
  }
});

// Zoom function
function zoom(event) {
  var zoomFactor = 1 + (event.clientY - startY) / 1000;

  // Limit the zoom factor to between 0.5 and 3
  zoomFactor = Math.min(3, Math.max(0.5, zoomFactor));
  document.body.style.transform = "scale(" + zoomFactor + ")";
  currentZoom = zoomFactor;
}

function zoomIn() {
  var zoomLevel = 100;
  var maxZoomLevel = 200;
  var zoomStep = 25;
  if (document.body.style.zoom) {
      zoomLevel = parseInt(document.body.style.zoom.replace("%", ""));
  }
  if (zoomLevel < maxZoomLevel) {
      zoomLevel += zoomStep;
  }
  document.body.style.zoom = zoomLevel + "%";
}

function zoomOut() {
  var zoomLevel = 100;
  var minZoomLevel = 50;
  var zoomStep = 25;
  if (document.body.style.zoom) {
      zoomLevel = parseInt(document.body.style.zoom.replace("%", ""));
  }
  if (zoomLevel > minZoomLevel) {
      zoomLevel -= zoomStep;
  }
  document.body.style.zoom = zoomLevel + "%";
}

var zoomButtons = document.getElementById("zoom-buttons");
zoomButtons.style.position = "fixed";
zoomButtons.style.top = "30%";
zoomButtons.style.right = "20px";
zoomButtons.style.transform = "translateY(-50%)";