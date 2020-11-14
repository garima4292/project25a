class Log{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        //this.image = loadImage("dustbingreen.png");
        World.add(world,this.body)
    }
    display(){
        //imageMode(CENTER);
        rectMode(CENTER)
        fill("blue");
        rect(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        //image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}