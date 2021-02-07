class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            density: 1.2,
            restitution: 0.3,
            friction: 0.0			
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(x, y, (this.r - 20)/2, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			fill(255,0,255);
            imageMode(CENTER);
            image(this.image, 0, 0, this.r, this.r);
			//ellispe(0,0,this.r, this.r);
			pop()
			
	}

}