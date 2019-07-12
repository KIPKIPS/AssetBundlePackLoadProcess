var sound = new Howl({
    src: ['../music/2.mp3']
});
var dom = function(s){
    return document.getElementById(s)
};
dom.cssName = function (name){
    var prefixes = ['', '-ms-','-moz-', '-webkit-', '-khtml-', '-o-'],
        rcap = /-([a-z])/g,capFn = function($0,$1){
            return $1.toUpperCase();
        };
    dom.cssName = function(name, target, test){
        target = target || document.documentElement.style;
        for (var i=0, l=prefixes.length; i < l; i++) {
            test = (prefixes[i] + name).replace(rcap,capFn);
            if(test in target){
                return test;
            }
        }
        return null;
    };
    return dom.cssName(name);
};
//界面初始化
window.onload= function() {
    $("#feedOF,#bgmOF,#textPlay").hide();
};
document.addEventListener('visibilitychange',function(){ //浏览器切换事件
    if(document.visibilityState=='hidden') { //状态判断
        //normal_title=document.title;
        document.title = '(●――●)喔呦,崩溃啦!';
        $("#loop")[0].pause();
        document.getElementById('icon').href='../images/leaveIcon.png';
    }
    else {
        document.title='(/≥▽≤)咦?又好了!';
        canPlay=true;
        if(canPlay==true&&document.getElementById('bgmOF').innerHTML == "B A C K T R A C K  :  O N"){
            $("#loop")[0].play();
        }
        document.getElementById('icon').href='../images/icon.png';
        setTimeout(function () {
            document.title = 'Hi,RECNEPS-KIPS';
        },2000)
    }
});

var start=false;
var fullDown = function () {
    var full = document.getElementById("full");
    full.style.display = "block";
    var elem = document.getElementById("body");
    requestFullScreen(elem);
};
//start按钮按下
function startGame() {
    $("#st").click(function(){

        draw();
        document.getElementById('canvas').style.opacity=0;
        $("#show").hide();/*隐藏开始界面*/
        document.getElementById('play').style.display='block';/*显示Play界面*/
        /*加载动画*/
        $("#line").show();
        var e = dom("line"),
            css3transition = dom.cssName("transition");
        e.style[css3transition] = "width 0.8s ease";
        e.style.width = "100%";
        /*开始按钮按下,加载动画执行完成后的操作(820毫秒之后)*/
        setTimeout(function () {
            start=true;
            $("#feedOF,#bgmOF,#textPlay").show();/*显示Play界面的模块*/
            /*重置控制模块显示文本*/
            document.getElementById('feedOF').innerHTML = "F E E F B A C K  :  O N";
            document.getElementById('bgmOF').innerHTML = "B A C K T R A C K  :  O N";
            $("#line").hide();/*隐藏动画模块*/
            $("#loop")[0].play();/*播放背景音乐(loop)*/
        },820);
    });
}
//back按钮按下
function backOnMouseDown() {
    /*位于开始界面,返回上一页*/
    if(start==false)
        history.go(-1);
    /*位于Play界面,返回开始界面*/
    else{
        start=false;
        $("#loop")[0].pause();
        $("#loop")[0].currentTime=0;
        $("#show").show();
        $("#feedOF,#bgmOF,#textPlay").hide();
    }
}
/*main的点击事件*/
var mainDown = function () {
    var obj = document.getElementById('main');
    obj.addEventListener('mousedown', hideElement);/*监听mousedown事件,执行hideElement方法*/
    obj.addEventListener('mouseup', showElement);/*监听mouseup事件,执行showElement方法*/
}
var mouseup=true;
/*hideElement方法*/
function hideElement() {
    if(start==true&&Hide==true){
        mouseup=false;
        $("#canvas").animate({
            opacity: [0.6, 'linear']
        },50,function () {
            $("#canvas").animate({
                opacity: [0, 'linear']
            },50);
        });

        /*function textOnMouseDown() {
            var text = document.getElementById("canvas");
            text.style.display = "none";
            textTimeKeeper();
        }

        var text;
        /!*back隐藏计时器*!/
        var textTimeKeeper = function () {
            textCleanTime();
            text = setTimeout(
                function () {
                    var text = document.getElementById("canvas");
                    text.style.display = 'block';
                }, 1400)
        };
        /!*text计时器清零*!/
        var textCleanTime = function () {
            clearTimeout(text);
        };*/
    }

}
/*showElement方法*/
function showElement() {
    if(start==true&&mouseup==true)
        $("#textPlay,#back,#full,#feedOF,#bgmOF").show();

}

/*bgmOF点击事件*/
var canPlay=false;
function bgmOFText() {
    var text = document.getElementById("bgmOF").innerHTML;
    var textChange = document.getElementById("bgmOF");
    if (text == "B A C K T R A C K  :  O F F") {
        $("#loop")[0].play();
        canPlay=true;
        textChange.innerHTML = "B A C K T R A C K  :  O N";
    }
    else {
        $("#loop")[0].pause();
        canPlay=false;
        textChange.innerHTML = "B A C K T R A C K  :  O F F";
    }
}
/*feedOF点击事件*/
function feedOFText() {
    var text = document.getElementById("feedOF").innerHTML;
    var textChange = document.getElementById("feedOF");
    if (text == "F E E F B A C K  :  O F F")
        textChange.innerHTML = "F E E F B A C K  :  O N";
    else
        textChange.innerHTML = "F E E F B A C K  :  O F F";
}
var Hide=true;
function canHide() {
    Hide=false;
}
function cannotHide() {
    Hide=true;
}
function draw() {
    var canvasWidth=document.getElementById('canvas').offsetWidth;
    var canvasHeight=document.getElementById('canvas').offsetHeight;

    if(canvasWidth>=0&&canvasWidth<=755){
        var canvas=document.getElementById('canvas');
        canvas.width=canvasWidth;
        canvas.height=canvasHeight;
        var cxt = canvas.getContext("2d");

        cxt.beginPath();
        cxt.moveTo(0, 0);
        cxt.lineTo(canvasWidth/4.0, 0);
        cxt.lineTo(canvasWidth/4.0,canvasHeight/8.0);
        cxt.lineTo(0,canvasHeight/8.0);
        cxt.closePath();
        cxt.fillStyle = "rgba(255,255,255)";
        cxt.fill();
    }
}
