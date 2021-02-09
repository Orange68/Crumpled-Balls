class Paper 
{
constructor(x,y)
{
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.x = x
this.y = y
this.r = 50
this.body=Bodies.circle(x,y,50,options)
World.add(this.body,world)
}
display()
{
var ballposition=this.body.ballposition
push()
translate(ballposition.x,ballposition.y)
rectMode(CENTER)
ellipse(0,0,this.r,this.r)

pop()
}





}