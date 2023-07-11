function add(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a + b;
    document.getElementById("add").innerHTML = c;
}

function sub(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a - b;
    document.getElementById("sub").innerHTML = c;
}

function multi(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a * b;
    document.getElementById("multi").innerHTML = c;
}

function divide(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a / b;
    document.getElementById("divide").innerHTML = c;
}