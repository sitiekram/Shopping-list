var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liArray=document.querySelectorAll("li");
/*function lilength()
{
	return document.getElementsByTagName("li").length;
}*/

function inputLength() {
	return input.value.length;
}
function eventtype()
{
	return event.target.nodeName;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var btn=document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    btn.classList.add("space");
    li.appendChild(btn);
    ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function listtoggle (event)
   {
   	  if(eventtype()=="LI")
   	  {
   	  	event.target.classList.toggle("done");
   	  }
   }
function createDeleteButton()
{
/*liArray.forEach(function(elem)
{
    var btn=document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    elem.appendChild(btn);
   // elem.insertAdjacentElement("afterend",btn);
})*/
   for(var i=0;i<liArray.length;i++)
   {
   	 var btn=document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    btn.classList.add("space");
    liArray[i].appendChild(btn);
   }
}
function deleteList(event)
{
	if(eventtype()=="BUTTON")
{    if(event.target.parentElement.nodeName=="LI")
	{event.target.parentElement.remove();
	}
}
}
createDeleteButton();
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
document.body.addEventListener("mousedown",listtoggle);
document.body.addEventListener("click",deleteList);


