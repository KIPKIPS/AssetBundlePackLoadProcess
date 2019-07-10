var start=false;
var fullDown = function () {
    var full = document.getElementById("full");
    full.style.display = "block";
    var elem = document.getElementById("body");
    requestFullScreen(elem);
};
function startGame() {
    start=true;
    $("#st").click(function(){
        $("#show").hide();
        $("#feedOF,#bgmOF,#textPlay,#line").show();
    });
}
function backOnMouseDown() {
    if(start==false){
        history.go(-1);
    }
    else{
        $("#show").show();
        $("#feedOF,#bgmOF,#textPlay,#line").hide();
    }

}