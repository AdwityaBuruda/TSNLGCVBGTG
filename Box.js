class Box{
  constructor(x, y, width, height,color) {
    
      var options = {
         
          restitution :0.4,
          friction :0.4,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color= color;
      this.image=loadImage("tin transparent.png");
      World.add(world, this.body);
      this.Visiblity = 255;
      
    }
    display(){
       var angle = this.body.angle;
       if(this.body.speed<3){ 
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(this.color);
        image(this.image, 0, 0, this.width, this.height);
        pop();
       }
       else{
          World.remove(world, this.body);
          push();
          if(this.Visiblity>0){ 
            this.Visiblity = this.Visiblity - 30;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height );
            pop();
          }
       }

       
        console.log(this.Visiblity);
        if (this.Visiblity < 200 && this.Visiblity > 0){
         score+= 1;
        }
      
      
        
      
     
      
    }





}
