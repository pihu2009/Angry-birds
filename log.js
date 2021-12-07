class Log
{
 constructor(x,y,w,a)
 {
  var options=
  {
   isStatic:true,   
   
  }   
  this.body= Bodies.rectangle(x,y,w,30,options) 
  this.width=w
  this.height=30
  Matter.Body.setAngle(this.body,a)
  World.add(myworld,this.body) 
  
 }

 
 
  display()
{
 var pos = this.body.position
 rectMode(CENTER) 
 fill("pink")
 strokeWeight(3)
 stroke("white")
 rect(pos.x,pos.y,this.width,this.height) 
}

}















































































