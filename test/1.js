function move(){
    var canvas=document.getElementById('canvas');
    canvas.height=728;
    canvas.width=1024;
    var context=canvas.getContext('2d');
    context.fillStyle='green';
    context.beginPath();
    context.arc(800,300,30,0,2*Math.PI,true);
    /*context.moveTo(50, 50);
    context.lineTo(200, 50);
    context.lineTo(200, 200);*/
    context.closePath();
    context.fill();
    setInterval(function(){
        run(context);
    }, 1);
};
var speed=0;
var startPoint=800;
function run(cxt){
    speed=-1;
    cxt.clearRect(0,0,1024,728);
    //cxt.top+=speed;
    startPoint+=speed;
    cxt.beginPath();
    /*cxt.arc(startPoint,300,30,0,2*Math.PI,true);*/
    cxt.moveTo(50, 50);
    cxt.lineTo(200, 50);
    cxt.lineTo(200, 200);
    cxt.closePath();
    cxt.fill();
}