class block{
    constructor(x,y,width,height){
var options={
    'restitutions':0.8,
    'friction':1.0,
    'density':20,
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);


    }

    display(){
    var pos=this.body.position;
    var angle=this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTRE);
    strokeWeight(0);
    stroke("black");
    fill("red");
    rect(0,0,this.width, this.height);
    pop();

}
}