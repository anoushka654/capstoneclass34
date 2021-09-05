class Ball {
  constructor (x, y, r, angle) {
    var options = {
      density: 0.8,
      frictionAir: 0.2
    }
  this.r = r;
  this.body = Bodies.circle (x, y, r, options);
  World.add (world, this.body);
    
  }
  display () {
  var angle = this.body.angle;
  push ();
  translate (this.body.position.x, this.body.position.y);
  rotate (angle);
  fill ("black");
  ellipse (0, 0, this.r, this.r);
  pop ();
  }
}
  