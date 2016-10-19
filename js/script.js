var canvas, 
    ctx, 
    dudes = [new Dude(50,50)], 
    bombs = [new Bomb(100, 100, "ticking", 1000, 3)],
    stages = [new Stage()],
    currrentStage = 0;


function init(){
    
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    window.setInterval(update, 20);
    
    
}


function update(){
    
    updatePositions();
    renderObjects();
    
}

function updatePositions(){
    
    dudes[0].updatePositions(stages[0]);
}

function renderObjects(){
    
    stages[0].render(ctx);
    dudes[0].render(ctx);
    bombs[0].render(ctx);
    
}

function keyDown(e){
    
    if(e.keyCode == 37){
        //Vänster
        dudes[0].vx = -dudes[0].speed;
        dudes[0].vy = 0;
    }
    if(e.keyCode == 38){
        //Upp
        dudes[0].vx = 0;
        dudes[0].vy = -dudes[0].speed;
    }
    if(e.keyCode == 39){
        //Höger
        dudes[0].vx = dudes[0].speed;
        dudes[0].vy = 0;
    }
    if(e.keyCode == 40){
        //Neråt
        dudes[0].vx = 0;
        dudes[0].vy = dudes[0].speed;
    } 
    if(e.keyCode == 32){
        //Placera bomb
        dudes[0].placeBomb();
        
    }
}

function keyUp(e){
    if(e.keyCode == 37){
        //Vänster
        dudes[0].vx = 0;
    }
    if(e.keyCode == 38){
        //Upp
        dudes[0].vy = 0;
    }
    if(e.keyCode == 39){
        //Höger
        dudes[0].vx = 0;
    }
    if(e.keyCode == 40){
        //Neråt
        dudes[0].vy = 0;
    }
}