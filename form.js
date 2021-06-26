class Form {
    constructor(){
        input=createInput('Name')
        start=createSprite(width/2,height/2+200)
        start.addImage(startimg);
    }    
    display(){
    
        input.position(width/2-100,height/2);
        input.style('width', '200px');
        input.style('height', '20px');
        input.style('background', '#50CFFF');

        imageMode ("center")
        image(logo,width/2,200,200,200);
        drawSprite(start);
        if(mousePressedOver(start)){
           name= input.value();
           gamestate = "play";
        }
    }
}