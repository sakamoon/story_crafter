function getRand(min, max){
	return Math.floor(Math.random()*(max-min+1))+ min;
}
function  insertcharacters(mystery){
	var i;
	var min = 0;
	var max = 8;
	var rand = getRand(0,8);
	mystery[rand].textContent="";
	mystery[rand].removeAttribute("id");
	mystery[rand].setAttribute("id", "p");
	var div = document.createElement("div");
	div.setAttribute("id", "player");
	var t = document.createTextNode("Player");
	div.appendChild(t);
	mystery[rand].appendChild(div);
	var rand2 = getRand(0,8);
	if (rand == rand2){
		rand2 ++;
		if (rand2 >= 9){
			rand2 = 0;
		}
	}
	mystery[rand2].removeAttribute("id");
	mystery[rand2].setAttribute("id", "m");
	mystery[rand2].textContent="";
	div = document.createElement("div");
	div.setAttribute("id", "monster");
	t = document.createTextNode("Monster");
	div.appendChild(t);
	mystery[rand2].appendChild(div);
	document.getElementById("monster").setAttribute("class", "hidden")
	var rand3 = getRand(0,8);
	if (rand == rand3){
		rand3 ++;
		if (rand3 >= 9){
			rand3 = 0;
		}
	}
	if (rand2 == rand3){
		rand3 ++;
		if (rand3 >= 9){
			rand3 = 0;
		}
	}
	mystery[rand3].removeAttribute("id");
	mystery[rand3].setAttribute("id", "k");
	mystery[rand3].textContent="";
	div = document.createElement("div");
	div.setAttribute("id", "key");
	t = document.createTextNode("Key");
	div.appendChild(t);
	mystery[rand3].appendChild(div);
	document.getElementById("key").setAttribute("class", "hidden")


}

function togglehidden(id){
	id.classList.toggle("show")
	console.log("it registered the click")
}
var gameGrid = document.querySelector("#game-grid");
var mysteryBox = document.querySelectorAll(".item");
var one = document.querySelector("#first");
var two = document.querySelector("#second");
var three = document.querySelector("#third");
var four = document.querySelector("#forth");
var five = document.querySelector("#fifth");
var six = document.querySelector("#sixth");
var seven = document.querySelector("#seventh");
var eight = document.querySelector("#eighth");
var nine = document.querySelector("#nineth");
insertcharacters(mysteryBox);
var key = document.querySelector("#k");
var monster = document.querySelector("#m");
var player = document.querySelector("#p");
one.onclick = function(){
	var id = document.querySelector("#box1")
	togglehidden(id)
};
two.onclick = function(){
	var id2 = document.querySelector("#box2")
	togglehidden(id2)
};
three.onclick = function(){
	var id3 = document.querySelector("#box3")
	togglehidden(id3)
};
four.onclick = function(){
	var id4 = document.querySelector("#box4")
	togglehidden(id4)
};
five.onclick = function(){
	var id5 = document.querySelector("#box5")
	togglehidden(id5)
};
six.onclick = function(){
	var id6 = document.querySelector("#box6")
	togglehidden(id6)
};
seven.onclick = function(){
	var id7 = document.querySelector("#box7")
	togglehidden(id7)
};
eight.onclick = function(){
	var id8 = document.querySelector("#box8")
	togglehidden(id8)
};
nine.onclick = function(){
	var id9 = document.querySelector("#box9")
	togglehidden(id9)
};
key.onclick = function(){
	var idk = document.querySelector("#key")
	togglehidden(idk)
};
monster.onclick = function(){
	var idm = document.querySelector("#monster")
	togglehidden(idm)
};

