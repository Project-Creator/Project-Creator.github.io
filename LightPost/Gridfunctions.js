var Using;
function writetopage() {
  console.log("writing...");
  pages[Using] = document.getElementById('page-content');
}
function addpage() {
  var pages123 = document.getElementById("pages").innerHtml;
  //dialog
  document.getElementById('dialog1').style.display = 'inline';
}
var pages = {
  indexhtml: "",
};

function closepage(input) {
  if (confirm("Do you want to close page, " + input + "?")) {
    var inp = input.replace(".", "");
    delete pages[inp];
    console.log("yeah");
    document.getElementById(input).innerHTML = "";
  } else {
    console.log("uhoh");
    return;
  }
}
function goToPage(input){
   document.getElementById('page-content').innerHTML = '';
  document.getElementById('page-content').innerHTML = pages[input.replace(".", "")];
  Using = input;
}
