var mycontainer = document.getElementById("images"),
  myimages = Array.from(mycontainer.children);
myimages[0].classList.add("active");
var a = setInterval(change, 2000),
  i = 1;
function change() {
  if (i == myimages.length) {
    myimages[i - 1].classList.remove("active");
    myimages[0].classList.add("active");
    i = 1;
  }
  myimages[i - 1].classList.remove("active");
  myimages[i].classList.add("active");
  i++;
}

///////////////////////
var mydivs = document.querySelectorAll(".menu"),
  myspanleft = document.querySelectorAll(".left"),
  myspanright = document.querySelectorAll(".right");
console.log(myspanleft[0]);
myspanleft[0].onclick = function () {
  window.location.href = "mathcour.html";
};
myspanright[0].onclick = function () {
  window.location.href = "mathexer.html";
};
myspanleft[1].onclick = function () {
  window.location.href = "francaiscour.html";
};
myspanright[1].onclick = function () {
  window.location.href = "francaisexer.html";
};
myspanleft[2].onclick = function () {
  window.location.href = "englishless.html";
};
myspanright[2].onclick = function () {
  window.location.href = "englishexer.html";
};
