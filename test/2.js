function change(){
    var startPoint=0;//起始点
    var canvas=document.getElementById('canvas');
    var context=canvas.getContext('2d');

    width = canvas.offsetWidth,
    height = canvas.offsetHeight,
    context = canvas.getContext('2d')
    canvas.width = width;
    canvas.height = height;
    w=width;
    h=height;

    var ti=setInterval(function(){
        cw++;
        if(cw<=w){
            run(context);
        }
        else{
            clearInterval(ti);
            console.log("cw"+cw)
            console.log("time"+time)
            console.log("startPoint"+startPoint)
            console.log("x"+x)
        }
    }, 1);
};
var cw=0;//位移量微分
var w=0;
var h=0;
var v0=8;//初始速度
var a=0;//加速度
var v=0;//变化的速度
var time=0;//时间
var x=0;//位移量
var startPoint=0;//起始点

function run(cxt){
    time+=0.01;
    a=3;
    x=v0*time-(0.5*a*(time*time));//位移公式代入
    startPoint+=1.5*x;
    cxt.clearRect(0,0,w,h);
    cxt.beginPath();
    cxt.fillStyle="#9ffff2";

    cxt.moveTo(startPoint-3000-w+cw, 0);
    cxt.lineTo(startPoint*1.11-170-w+cw, 0);
    cxt.lineTo(startPoint*1.11-170+cw, 0);
    cxt.lineTo(startPoint-20+cw, 150);
    cxt.lineTo(startPoint*1.11-170+cw, 300);
    cxt.lineTo(startPoint-0+cw, 500);
    cxt.lineTo(startPoint*1.11-170+cw, 755);
    cxt.lineTo(startPoint-3000-w+cw, 755);
    cxt.lineTo(startPoint-3000-w+cw, 0);

    cxt.closePath();
    cxt.fill();
    var tim=setTimeout(function () {
        cw=0;//位移量微分
        w=0;
        h=0;
        v0=8;//初始速度
        a=0;//加速度
        v=0;//变化的速度
        time=0;//时间
        x=0;//位移量
        startPoint=0;//起始点
    },700)

}
