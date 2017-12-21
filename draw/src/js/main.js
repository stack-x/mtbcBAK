var draw = (function(){
  //Get the height and the width of the main element
  var mWidth = document.querySelector('main').offsetWidth,
    mHeight = document.querySelector('main').offsetHeight,

    //Create the canvas
    canvas = document.createElement('canvas'),

    //create a drawing context
    ctx = canvas.getContext('2d'),

    //Create the initial bounding box
    rect = canvas.getBoundingClientRect(),

    //current x,y coords
    x=0,
    y=0,

    //starting x,y coords
    x1=0,
    y1=0,

    //ending x,y cords
    x2=0,
    y2=0,

    //what shape are we drawing
    shape='';

  return{
    //Retun a random color
    randColor: function() {
      return this.randColor();
    },

    //Sets the shape to be drawn
    setShape(shp) {
      shape = shp;
    },

    //Set the x,y coords
    setXY: function(evt) {
      x = (evt.clientX - rect.left) - canvas.offsetLeft;
      y = (evt.clientY - rect.top);
    },

    setStart: function() {
      x1=x;
      y1=y;
    },

    setEnd: function() {
      x2=x;
      y2=y;
    },

    //Write the cords back to the UI
    writeXY: function() {
      document.getElementById('trackX').innerHTML = 'X: ' + x;
      document.getElementById('trackY').innerHTML = 'Y: ' + y;
    },

    //Draws a rectangle
    drawRect: function() {
      ctx.fillStyle = this.randColor();
      ctx.fillRect(x1, y1, (x2-x1), (y2-y1));
    },

    drawLine: function() {
      ctx.strokeStyle = this.randColor();
      ctx.beginPath();
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.stroke();
    },

    drawCircle: function() {
      ctx.fillStyle = this.randColor();

      let a = (x1-x2);
      let b = (y1-y2);
      let radius = Math.sqrt(a*a + b*b);

      ctx.beginPath();
      ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
      ctx.stroke();
    },

    //Draws a selected shape
    draw: function() {

      ctx.restore();
      if( shape==='rectangle' ){
        this.drawRect();
      }else if( shape==='line' ){
        this.drawLine();
      }else if( shape==='circle' ){
        this.drawCircle();
      }else{
        alert('Please choose a shape');
      }
      ctx.save();
    },

    //Retuns the canvas object
    getCanvas: function(){
      return canvas;
    },

    init: function() {
      //Create the canvas
      canvas.height = mHeight;
      canvas.width = mWidth;
      document.querySelector('main').appendChild(canvas);
    }
  };

})();

draw.init();

//Choose to draw a rectangle
document.getElementById('btnRect').addEventListener('click', function(){
  draw.setShape('rectangle');
});

//Choose to draw a line
document.getElementById('btnLine').addEventListener('click', function(){
  draw.setShape('line');
});

//Choose to draw a line
document.getElementById('btnCircle').addEventListener('click', function(){
  draw.setShape('circle');
});

//Track the x,y position
draw.getCanvas().addEventListener('mousemove', function(evt){
  draw.setXY(evt);
  draw.writeXY();
});

//Set starting the x,y position
draw.getCanvas().addEventListener('mousedown', function(){
  draw.setStart();
});

//Set ending the x,y position
draw.getCanvas().addEventListener('mouseup', function(){
  draw.setEnd();
  draw.draw();
});
