var myselect = document.querySelectorAll("#quest1"),
  myspan = document.getElementById("myspan"),
  myinnerspan = document.getElementById("myinnerspan");
myselect.forEach((v) => {
  v.onchange = function () {
    if (this.value === myspan.innerHtml) {
    } else {
    }
  };
});
