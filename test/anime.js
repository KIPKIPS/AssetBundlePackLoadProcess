function change(){
    var canvas=document.getElementById('canvas');
    var context=canvas.getContext('2d');
    width = canvas.offsetWidth,
    height = canvas.offsetHeight,
    canvas.width = width;
    canvas.height = height;
    w=width;
    h=height;
    var ti=setInterval(function(){
        cw+=2;
        if(cw<150){
            run(context);
        }
        else{
            clearInterval(ti);
            cw=0;
        }
    }, 1);
};
var cw=0;//位移量微分
var w=0;
var h=0;

function run(cxt){
    cxt.clearRect(0,0,w,h);
    var random

    cxt.beginPath();
    cxt.fillStyle="black";
    cxt.moveTo(200-cw,377-1.5*cw);
    cxt.lineTo(190-cw-cw*0.1, 377-1.5*cw);
    cxt.lineTo(190-cw-cw*0.1, 367-1.5*cw-cw*0.1);
    cxt.lineTo(200-cw, 367-1.5*cw-cw*0.1);
    cxt.closePath();
    cxt.fill();

    cxt.beginPath();
    cxt.fillStyle="red";
    cxt.moveTo(200-0.7*cw,377-0.5*cw);
    cxt.lineTo(190-0.7*cw-cw*0.2, 377-0.5*cw);
    cxt.lineTo(190-0.7*cw-cw*0.2, 367-0.5*cw-cw*0.2);
    cxt.lineTo(200-0.7*cw, 367-0.5*cw-cw*0.2);
    cxt.closePath();
    cxt.fill();

}
