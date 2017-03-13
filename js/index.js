$(function(){
    var canvas=$('#canvas');
    var ctx=canvas.get(0).getContext("2d");
    var ROW=15;
    var COL=15;
    var width=canvas.width();
    var off=width/ROW;
    var flag=true;
    var blocks={};
    function draw(){
        for(var i=0;i<ROW;i++){
            ctx.beginPath();
            ctx.moveTo(off/2+0.5,off/2+i*off+0.5);
            ctx.lineTo(14.5*off+0.5,off/2+i*off+0.5);
            ctx.stroke()
            ctx.closePath();
        }
        for(var j=0;j<COL;j++){
            ctx.beginPath();
            ctx.moveTo(off/2+0.5+j*off,off/2+0.5);
            ctx.lineTo(off/2+j*off+0.5,14.5*off+0.5);
            ctx.stroke()
            ctx.closePath();
        }
    }
    draw()
   function makeCircle(x,y){
       ctx.beginPath()
       ctx.arc(x*off+0.5,y*off+0.5,3,0,Math.PI*2)
       ctx.fill()
       ctx.closePath()
   }
    makeCircle(3.5,3.5)
    makeCircle(11.5,3.5)
    makeCircle(7.5,7.5)
    makeCircle(3.5,11.5)
    makeCircle(11.5,11.5)
    function drawChees(x,y,color){
            if(color=='black'){
                ctx.fillStyle="#333"
            }
            if(color=='white')
                ctx.fillStyle="red"
        blocks[v2k(x,y)]=color;
        ctx.beginPath()
        ctx.arc((x+0.5)*off+0.5,(y+0.5)*off+0.5,8,0,Math.PI*2)
        ctx.fill()
        ctx.closePath()
    }
    canvas.on('click',function(e){
       var position={x:Math.round((e.offsetX-20)/off),y:Math.round((e.offsetY-20)/off)};
        if(blocks[v2k(position.x,position.y)]){
            return
        }
        drawChees(position.x,position.y);
       if(flag){
           drawChees(position.x,position.y,'black')

       }else{
           drawChees(position.x,position.y,'white')
       }
       flag=!flag
   })
    function v2k(x,y){
       return x+"_"+y
    }
    function checks(pos,color){
     num=1
        var table={};
    }
})