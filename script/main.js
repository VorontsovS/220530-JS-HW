let ptop = 0;
let pleft = 0;

document.addEventListener("click", function(e) {
    console.log(e.target);
    if (e.target.className=="down key" && ptop<130) {
        ptop = ptop+10;
        document.getElementsByClassName('square')[0].style.top = ptop+'px';
    }
    if (e.target.className=="up key" && ptop>0) {
        ptop = ptop-10;
        document.getElementsByClassName('square')[0].style.top = ptop+'px';
    }
    if (e.target.className=="right key" && pleft<230) {
        pleft = pleft+10;
        document.getElementsByClassName('square')[0].style.left = pleft+'px';
    }
    if (e.target.className=="left key" && pleft>0) {
        pleft = pleft-10;
        document.getElementsByClassName('square')[0].style.left = pleft+'px';
    }
  });

/*

document.addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
*/
