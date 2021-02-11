canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mymousedown);
var mouseevent;
function mymousedown(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.linewidth=2;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<922){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e)
{
x=e.touches[0].clientX-canvas.offsetLeft;
y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e)
{
currentX=e.touches[0].clientX-canvas.offsetLeft;
currentY=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth="2";
ctx.moveTo(x,y);
ctx.lineTo(currentX,currentY);
ctx.stroke();
x=currentX;
y=currentY;

}


