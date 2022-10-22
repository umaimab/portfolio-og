(function() {
  var canvas = (this.__canvas = new fabric.Canvas("canvas", 
  {selection : false,
    controlsAboveOverlay:true,
    centeredScaling:true,
    allowTouchScrolling: true}));
  fabric.Object.prototype.transparentCorners = false;
  fabric.Object.prototype.borderColor = "black";
  fabric.Object.prototype.cornerColor = "black";
  fabric.Object.prototype.cornerStyle = "rect";
  fabric.Object.prototype.cornerSize = 8;
})();