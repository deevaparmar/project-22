class rope {
    constructor (bodyA,bodyB,pointA,pointB){
        this.pointA = pointA
        this.pointB =pointB
       var options = {
           bodyA:bodyA,
           bodyB:bodyB,
           pointB: {x:this.pointA, y:this.pointB}
            
       } 
       this.rope = Constraint.create(options)
       World.add(world, this.rope) 
    }
    display (){
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x+this.pointA, pointB.y+this.pointB)
    }
}