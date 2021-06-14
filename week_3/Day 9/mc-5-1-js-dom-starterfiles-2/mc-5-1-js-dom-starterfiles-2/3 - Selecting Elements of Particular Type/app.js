const list = document.getElementsByTagName("li");
const orange = document.getElementsByClassName("not-orange");


// first loop to change orange 
for (let i = 0; i < list.length; i++){
list[i].style.color ="orange"
}

//second loop to serach other to red
for (let i = 0; i< orange.length; i++){
orange[i].style.color ="red"
}