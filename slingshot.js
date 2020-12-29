class Sling{


    constructor(bodyA,pointB){

var o={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:2,

}
this.pointB=pointB
this.sling=Constraint.create(o)
World.add(world,this.sling)
    }


    join (body){

this.sling.bodyA=body

    }


    fly(){

this.sling.bodyA=null

    }

display(){
if(this.sling.bodyA){
var posA=this.sling.bodyA.position
var posB=this.pointB


line (posA.x,posA.y,posB.x,posB.y)

}
}
}