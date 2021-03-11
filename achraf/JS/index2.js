var myselect = document.querySelectorAll("#myselect"),
  myspans = document.querySelectorAll("#resultQ1 span"),
  myspan = document.querySelectorAll("#resultQ1"),
  myresu = document.getElementById("resul"),
  mybuttion = document.querySelector("button");
res = 0;
var i = 0;
myselect.forEach((v) => {
  v.onchange = function () {
    if (this.value === myspans[i].innerHTML) {
      myspan[i].innerHTML = "True";
      res += 2;
      myspan[i].style.color = "blue";
    }
    i++;
  };
});
console.log(res);
mybuttion.onclick = function () {
  document.querySelectorAll("#resultQ1").forEach((va) => {
    va.removeAttribute("class");
  });
  myresu.innerHTML = "Résultat : " + res + "/10";
};
