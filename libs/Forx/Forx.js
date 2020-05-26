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
    New('c', "background-color", [], "");
    New('w', "width", ["px", "%", "vw", "vh", "em"], "%");
    New('h', "height", ["px", "%", "vw", "vh", "em"], "%");
    New('bw', "border-width", ["px", "%", "vw", "vh", "em"], "px");
    New('bc', "border-color", [], "");
    New('bs', "border-style", [], "");
    New('br', "border-radius", ["px", "%", "vw", "vh", "em"], "px");
    New('b', "border", [], "");
  },
};
Forx.main();
