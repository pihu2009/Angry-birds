class Bird
{
 constructor(x,y,w,h)
 {
   
   var bird=
   {
  //  bird1.y=World.mouseY
   // bird1.x=World.mouseX
   }
   this.bird1=Bodies.rectangle(x,y,w,h,bird)
   this.width=w
   this.height=h
   World.add(myworld,this.bird1)
   
 }
  display()
  {
   var pin =  this.bird1.position  
   rectMode(CENTER)
   fill("darkred")
   rect(pin.x,pin.y,this.width,this.height)
  }





 }











































































































