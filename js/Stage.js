function Stage(){
    
    this.tileHeight = 50;
    this.tileWidth = 50;
    
    this.map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,2,1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];
    
}

Stage.prototype.render = function(ctx){

    for(var yIndex = 0; yIndex < this.map.length; yIndex++){
        for(var xIndex = 0; xIndex < this.map[yIndex].length; xIndex++){
            
            var tileType = this.map[yIndex][xIndex];
            
            if(tileType == 0){
                
                ctx.fillStyle = "green";
                
            } else if(tileType == 1){
                
                ctx.fillStyle = "grey";
                
            }else{
                
                ctx.fillStyle = "brown";
                
            }
        
            ctx.fillRect(xIndex * this.tileWidth, yIndex * this.tileHeight, this.tileWidth, this.tileHeight);
        }
    }  
}

Stage.prototype.getTileType = function(x, y){
 
    var xIndex = Math.floor(x / this.tileWidth);
    var yIndex = Math.floor(y / this.tileHeight);
    
    return this.map[yIndex][xIndex];
    
}