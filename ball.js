class Ball{

    constructor(x,y){
   

  var options ={
   restitution:2,
   friction:4,
   density:12,
   isStatic:false
         }
this.body = Bodies.circle(x,y,100,options);



World.add(world, this.body);

 }

display(){
 var pos = this.body.position;
 var angle = this.body.angle;
 push();
 translate(pos.x, pos.y);
 rotate(angle);
 circle(0,0,100);
 pop();
}

}