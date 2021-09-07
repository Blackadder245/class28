class Slingshot{
constructor(b1,p2){
  var options={
  bodyA:b1,pointB:p2,
  stiffness:0.1,length:2
  }
    this.chain=  Matter.Constraint.create(options)
    Matter.World.add(world,this.chain)
}
display(){
push ()
strokeWeight(1)
if(this.chain.bodyA!=null){line (this.chain.bodyA.position.x,
    this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
}
pop ()
}
fly(){
  this.chain.bodyA=null
}



}