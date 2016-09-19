function Dude(startX, startY){
    
    this.x = startX;
    this.y = startY;
    this.w = 40;
    this.h = 40;
    this.vx = 0;
    this.vy = 0;
    this.speed = 3;
    //this.img = new Image();
    
    
    
}

Dude.prototype.render = function(ctx){
    
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.w, this.h);
    
}


Dude.prototype.updatePositions = function(stage){
    
    var tileType1, tileType2;
    
    //Definiera två kollissionspunkter
    if(this.vy < 0){
        //Uppåt
        //Övre vänstra hörnet
        tileType1 = stage.getTileType(this.x, this.y + this.vy)
        //Övre högra hörnet
        tileType2 = stage.getTileType(this.x + this.w, this.y + this.vy)
    }
    
    if(this.vy > 0){
        //Neråt
        //Nedre vänstra hörnet
        tileType1 = stage.getTileType(this.x, this.y + this.h + this.vy)
        //Nedre högra hörnet
        tileType2 = stage.getTileType(this.x + this.w, this.y + this.h + this.vy)
    }
    
    if(tileType1 == 0 && tileType2 == 0){
        //Rörelse upp och ner
        this.y = this.y + this.vy;
    }
    
    //Definiera två kollissionspunkter
    if(this.vx > 0){
        //Åt höger
        //Övre högra hörnet
        tileType1 = stage.getTileType(this.x + this.w + this.vx, this.y)
        //Nedre högra hörnet
        tileType2 = stage.getTileType(this.x + this.w + this.vx, this.y + this.h);
    }
    
    if(this.vx < 0){
        //Åt vänster
        // Övre vänstra
        tileType1 = stage.getTileType(this.x + this.vx, this.y)
        //Undre vänstra hörnet
        tileType2 = stage.getTileType(this.x + this.vx, this.y + this.h)
    }
    
    if(tileType1 == 0 && tileType2 == 0){
        //Rörelse upp och ner
        this.x = this.x + this.vx;
    }
    
    
    
}