class Link{
constructor(b1, b2){
    var lastlink = b1.body.bodies.length -2;
    this.link = Constraint.create({
        bodyA : b1.body.bodies[lastlink], 
        pointA : {x: 0, y:0},
        bodyB : b2, 
        pointB : {x : 0, y : 0},
        length : 0,
        stiffness : 0.1

    })
    World.add(world, this.link)
}
}