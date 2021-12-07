//namespacing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies

var myengine,myworld,bird1,ground1,pig1,log1,box1,box2,box3,box4,pig2,log2,box5,log3,log4;

function setup()
{
    
createCanvas(1500,700)


myengine= Engine.create();          
myworld=myengine.world; 


ground1 = new Ground(1500,700,3000,20)
bird1= new Bird(100,100,20,20)
pig1= new Pig(1150,650)
box1= new Box(1000,650)
box2= new Box(1300,650)
log1= new Log(1150,550,450,PI)
box3= new Box(1000,485)
box4= new Box(1300,485)
pig2= new Pig(1150,485)
log2= new Log(1150,385,450,PI)
box5= new Box(1150,220)
log3= new Log(1000,220,400,PI)



}

function draw()
{
Engine.update(myengine)     
background("black")
ground1.display()
bird1.display()
pig1.display()
box1.display()
box2.display()
log1.display()
box3.display()
box4.display()
pig2.display()
log2.display()
box5.display()
log3.display()
}


































