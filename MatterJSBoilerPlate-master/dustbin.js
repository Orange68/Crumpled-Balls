class DustBin
{
constructor(x,y)
{
var options={
isStatic:true
}
this.x=x
this.y=y
this.l=100
this.body=Bodies.rectangle(x,y,100,options)
World.add(this.body,world)
}
display(){
var dustbinposition=this.body.dustbinposition
push()
translate(dustbinposition.x,dustbinposition.y)
rectMode(CENTER)
rectangle(0,0,this.l,this.l)

pop()
}




}