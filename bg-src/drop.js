function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 1, 1, 1);
  this.yspeed = map(this.z-0.8, 0, 10, 0.1, 0.5);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 230, 0, 0.08);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  };

  this.show = function() {
    var thick = map(this.z, 0, 40, 5, 5);
    strokeWeight(thick);
    stroke(255, 255, 225);
    line(this.x, this.y, this.x, this.y);
  };
}
