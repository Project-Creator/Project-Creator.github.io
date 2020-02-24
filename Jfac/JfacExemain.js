function display(id){
	this.id = id;
		document.getElementById(id).classList.toggle("show");
};
display("object"); 
display("function");
