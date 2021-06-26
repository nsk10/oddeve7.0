class Game{
    constructor(){
c2 = createSprite(width/2,100,40,40);
c2.addImage(yimg);
c2.scale=0.4;

c1 = createSprite(width/2,300,40,40);
c1.addImage(bimg);
c1.scale=0.6;
t1=createSprite(960,30,100,50);
t1.shapeColor="#0060A5"
t2=createSprite(320,30,100,50);
t2.shapeColor="#FFF200"
var x=490

for(var i=1;i<=5;i++){
    nos[i]=createSprite(x ,460,50,50 );
    x=x+75
}

var x=490
for(var i=6;i<=10;i++){
    nos[i]=createSprite(x ,540,50,50 );
    x=x+75
}
}
    start(){
        form.display();
    }

    play(){
        start.destroy();
        input.hide();
        drawSprites();

        for(var i=1;i<=10;i++){
            if(mousePressedOver(nos[i])){
                pn=i;
               cn=Math.round(random(1,10));   
               pt+=pn;
               ct+=cn;
            if(pn===cn){
                gamestate="end";
            }
            }
        }
        
        fill("#FFF200")
        textSize(20);
    text(pn,width/2-10,290);
    text(pt,940,20);

    fill("#0060A5")
    textSize(20);
text(cn,width/2-10,90);
text(ct,310,20);
        imageMode(CENTER);
image(noimg,width/2,500,400,200)
        image(logo,50,50,50,50)
    }

    end(){
        imageMode(CENTER);

        textAlign("center");
       
        if (pt>ct){
            image(bimg,width/2,height/2,500,500)
            fill("#FFF200")
            textSize(30)
        text(name+":"+pt,width/2,height/2-100);
        text("computer:"+ct,width/2,height/2-50);
        textSize(50)

            text("you win!",width/2,height/2+100)

        }
        else if(pt<ct){
            
            image(yimg,width/2,height/2,500,500)
        
            fill("#0060A5")
            textSize(30)
            text(name+":"+pt,width/2,height/2-100);
            text("computer:"+ct,width/2,height/2-50);
            textSize(50)
         text   ("you lose",width/2,height/2+100)
        }
        else if(pt===ct){
            image(bimg,width/2,height/2,500,500)
            fill("#FFF200")
            textSize(30)
            text(name+":"+pt,width/2,height/2-100);
            text("computer:"+ct,width/2,height/2-50);
            textSize(50)
            text   ("its a draw",width/2,height/2+100)
           }
    }
}

