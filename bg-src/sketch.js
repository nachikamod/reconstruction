var drops = [];

function setup() {
  var cnv = createCanvas(windowWidth , windowHeight);
  cnv.style('display', 'block');
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(27, 39, 53);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
