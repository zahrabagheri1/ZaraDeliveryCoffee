
// fixed header top

window.onscroll = function() {fixedHeader()};

let header = document.getElementById("fixedTop");
let sticky = header.offsetTop;

function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixedTop");
  } else {
    header.classList.remove("fixedTop");
  }
}