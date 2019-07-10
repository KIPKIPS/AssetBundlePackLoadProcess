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
window.onload= function() {
    $("#feedOF,#bgmOF,#textPlay").hide();
};
document.addEventListener('visibilitychange',function(){ //浏览器切换事件
    if(document.visibilityState=='hidden') { //状态判断
        //normal_title=document.title;
        document.title = '(●――●)喔呦,崩溃啦!';
        document.getElementById('icon').href='../images/leaveIcon.png';
    }else {
        document.title='(/≥▽≤)咦?又好了!';
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
        $("#show").hide();
        document.getElementById('play').style.display='block';
        $("#line").show();
        var e = dom("line"),
            css3transition = dom.cssName("transition");
        e.style[css3transition] = "width 0.8s ease";
        e.style.width = "100%";

        setTimeout(function () {
            start=true;
            $("#feedOF,#bgmOF,#textPlay").show();
            $("#line").hide();
        },1000);
    });
}
//back
function backOnMouseDown() {
    if(start==false){
        history.go(-1);
    }
    else{
        start=false;
        $("#show").show();
        $("#feedOF,#bgmOF,#textPlay").hide();
    }

}
var mainDown = function () {
    var obj = document.getElementById('main');
    obj.addEventListener('mousedown', hideElement);
    obj.addEventListener('mouseup', showElement);

}

function hideElement() {
    if(start==true&&Hide==true){
        $("#textPlay,#back,#full,#feedOF,#bgmOF").hide();
    }
}
function showElement() {
    if(start==true){
        $("#textPlay,#back,#full,#feedOF,#bgmOF").show();
    }
}
function bgmOFText() {
    var text = document.getElementById("bgmOF").innerHTML;
    var textChange = document.getElementById("bgmOF");
    if (text == "B A C K T R A C K  :  O F F") {
        textChange.innerHTML = "B A C K T R A C K  :  O N";
    }
    else {
        textChange.innerHTML = "B A C K T R A C K  :  O F F";
    }
}

function feedOFText() {
    var text = document.getElementById("feedOF").innerHTML;
    var textChange = document.getElementById("feedOF");
    if (text == "F E E F B A C K  :  O F F") {

        textChange.innerHTML = "F E E F B A C K  :  O N";
    }
    else {
        textChange.innerHTML = "F E E F B A C K  :  O F F";
    }
}
var Hide=true;
function canHide() {
    Hide=false;
}
function cannotHide() {
    Hide=true;
}
