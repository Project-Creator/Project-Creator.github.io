window.Jfac = {
    css: {
        add: function(id, action) {
            this.id = id;
            this.action = action;
                document.getElementsByTagName("style")[0].innerHTML = document.getElementsByTagName("style")[0].innerHTML + id + "{" + action + "}";
            //console.log(id+" , "+action);
        },
        get: function(id, attribute) {
                this.id = id;
                this.attribute = attribute;
                console.log("the value of " + id + "'s" + attribute + "is " + window.getComputedStyle(document.getElementById(id), null).getPropertyValue(attribute));
                return window.getComputedStyle(document.getElementById(id, null).getPropertyValue(attribute));            
                //document.getElementsByTagName("style")[0].innerHTMLwindow.getComputedStyle(element);
        }
    },
    file: {
        bring: function(src, type) {
            this.src = src;
            this.type = type;
            var node = document.createElement("script");
            document.getElementsByTagName("body")[0].appendChild(node);
            node.setAttribute("src", src);
            node.setAttribute("type", type);
            console.log("added script " + src + ", type = " + type);
        },
        remove: function(src, type) {
            this.src = src;
            this.type = type;
            document.querySelector("script", src).remove();
        }
    },
    math: {
        rand: function(min, max,whole) {
            this.max = max;
            this.min = min;
            this.whole = inc;
            if (inc === true) {
                return Math.floor(Math.random() * max + min);
            }
        },
    },
};
