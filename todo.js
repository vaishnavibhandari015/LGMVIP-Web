var list = document.getElementsByTagName("ul");
var del;
for (del = 0; del < list.length; del++) {
    var rem = document.createElement('remove');
    var text = document.createTextNode('\u00D7');

    rem.className = "close";
    rem.appendChild(text);
    list[del].appendChild(rem);
}

var close = document.getElementsByClassName("close");
var del;
for (del = 0; del < close.length; del++) {
    close[del].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function Add() {
    var li = document.createElement("li");
    var inputValue = document.getElementById('input').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === "") {
        alert("Write Something...")
    }
    else {
        document.getElementById('myuL').appendChild(li);
    }
    document.getElementById('input').value = "";

    var span = document.createElement('delete');
   var txt = document.createTextNode("\u274C");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (del = 0; del < close.length; del++) {
        close[del].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

