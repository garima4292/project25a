class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.2,
            friction:1.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,(r-40),options);
        this.radius =r;
        this.image = loadImage("paper.png");
        World.add(world,this.body)
    }
    display(){
        imageMode(RADIUS);
        fill("purple");
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}