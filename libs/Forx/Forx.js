var Forx = {
  main: function() {
    function New(a, b, c, d) {
      let temp = document.querySelectorAll("[" + a + "]");
      for (var i = 0; i < temp.length; i++) {
        let tempa;
        let tempb = false;
        for (var z; z < c.length; z++) {
          if (temp[i].getAttribute(a).search(c[z]) != -1) {
            tempb = true;
          }
        }
        if (tempb == false) {
          tempa = d;
        }
        temp[i].style[b] = temp[i].getAttribute(a) + tempa;
      }
    }
    for (let u = 0; u < document.getElementsByTagName("*").length; u++) {
      document.getElementsByTagName("*")[u].style.position = "relative";
    }
    New('c', "background-color", [], "");
    New('w', "width", ["px", "%", "vw", "vh", "em"], "%");
    New('h', "height", ["px", "%", "vw", "vh", "em"], "%");
    New('bw', "border-width", ["px", "%", "vw", "vh", "em"], "px");
    New('bc', "border-color", [], "");
    New('bs', "border-style", [], "");
    New('br', "border-radius", ["px", "%", "vw", "vh", "em"], "px");
    New('bo', "border", [], "");
    New('l', "left", ["px", "%", "vw", "vh", "em"], "%");
    New('r', "right", ["px", "%", "vw", "vh", "em"], "%");
    New('t', "top", ["px", "%", "vw", "vh", "em"], "%");
    New('b', "bottom", ["px", "%", "vw", "vh", "em"], "%");

  },
};
Forx.main();
