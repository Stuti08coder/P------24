class Rubber{
   
        constructor(x,y,width,height) {
          var options = {
            'restitution':0.3,
          'friction':5,
          'density':1
          }
          this.body = Bodies.rectangle(x,y,width,height);
          this.width = width;
          this.height = height;

          Matter . Bodies.circle(x,y,4,this.body,0)
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          rectMode(CENTER);
          fill("purple");
          rect(pos.x, pos.y, this.width, this.height);
        }
      };
