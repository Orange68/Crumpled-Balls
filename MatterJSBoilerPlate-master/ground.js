class Ground
{
constructor(x,y) 
{
var options={
isStatic:true   
}
this.x=x
this.y=y
this.l=50
this.body=Bodies.rectangle(x,y,options)
World.add(this.body,world)
}
display()
{
var groundposition=this.body.groundposition
push()
translate(groundposition.x,groundposition.y)
rectMode(CENTER)
rectangle(0,0,this.l,this.l)

pop()
}





}