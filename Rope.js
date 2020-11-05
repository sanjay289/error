class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.2,
            length:250,
        }
        this.body=Constraint.create(options);
        World.add(world, this.body);
    }
    attach(body){
        this.body.bodyA=body;
    }
        fly(){
        this.body.bodyA=null;
        }
    display() {
    
     var pointA=this.body.bodyA.position;
      var pointB=this.pointB;
    
        
          strokeWeight(7);
           line(pointA.x,pointA.y,pointB.x,pointB.y);
    
        
    }    

} 
