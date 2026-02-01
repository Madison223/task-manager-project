function addElement() {
var li = document.createElement("li");
var inputValue = document.getElementById("query").value;
var text = document.createTextNode(inputValue);
li.appendChild(text);
if (inputValue !== '') {
document.getElementById("theList").appendChild(li);
}
document.getElementById("query").value = "";
li


var span = document.createElement("button");
var addButton = document.createTextNode("X");


span.className = "close";
span.appendChild(addButton);
myList[i].appendChild(span);
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {


var div = this.parentElement;
div.style.display = "none";


}
}


}
var myList = document.getElementsByTagName("LI"); 
var i;
for (i = 0; i < myList.length; i++) {
var span = document.createElement("SPAN");
var addButton = document.createTextNode("X");
span.className = "close";
span.appendChild(addButton);
myList[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {


var div = this.parentElement;
div.style.display = "none";


}
}