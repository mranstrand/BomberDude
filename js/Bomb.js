function Bomb(x, y, state, time, power) {

    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.power = power;
    this.time = time;
    this.state = state;
    this.flameTime = 40;
    this.spreadTime = 20;

    window.setTimeout(this.explode, this.time);
    
}

Bomb.prototype.explode = function () {
    
    this.setState();
   
    //Klocka för att släcka
    //window.setTimeout(this.die, this.flameTime)
    
    if (this.power > 0) {
        //Eldspridning
        //Till höger
        bombs.push(new Bomb(this.x + this.w, this.y, "flaming", this.spreadTime, this.power - 1));
        //Till vänster
        bombs.push(new Bomb(this.x - this.w, this.y, "flaming", this.spreadTime, this.power - 1));
        //Nedanför
        bombs.push(new Bomb(this.x, this.y + this.h, "flaming", this.spreadTime, this.power - 1));
        //Ovanför
        bombs.push(new Bomb(this.x, this.y - this.h, "flaming", this.spreadTime, this.power - 1));
    }
    
}

Bomb.prototype.render = function(ctx) {
   console.log(this.getState())
    if (this.state == "ticking") {
        ctx.fillStyle = "grey";
    } else if (this.state == "flaming") {
        ctx.fillStyle = "red";
    }


    ctx.fillRect(this.x, this.y, this.w, this.h);

}

Bomb.prototype.die = function(){
    //Ta bort bomb
    bombs.splice(bombs.indexOf(this), 1);
    
}

Bomb.prototype.getState = function(){
    return this.state;
    
}

Bomb.prototype.setState = function(){
    this.state = "flaming";
    
}