class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':2,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 100,50, options);
      this.width = 100;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.y = mouseY;
      pos.x = mouseX;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
    
      //rectMode(CENTER);
      strokeWeight(6)
      stroke("green")
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };