let days= ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday","Sunday"];
let prevday;

for(i=0; i<document.getElementsByClassName("activity").length; i++){
  document.getElementsByClassName("activity")[i].innerHTML ="<h2>" + days[i] + "</h2>";

  document.getElementsByClassName("activity")[i].addEventListener ('click',setActive,false);

 document.getElementsByClassName("activity")[i].id=days[i];
}

document.getElementById('Monday').classList.toggle('active');
//document.getElementById("image").innerHTML= "<img src= 'assets/"+ image[0] +"' >";

function setActive(e){

  prevday=document.getElementsByClassName("active")[0].id;
  if(prevday !=undefined){
    document.getElementById(prevday).classList.remove("active");
    document.getElementById(prevday + "day").style.display ="none";
  }
console.log(prevday + " here ");
if(e.target.tagName == "H2"){
  e.target.parentNode.classList.add("active");
}else{
  e.target.classList.add("active");
}

currentday= document.getElementsByClassName('active')[0].id;
console.log(currentday);
document.getElementById(currentday +"day").style.display= "block";
//document.getElementById('image').innerHTML= "<img src='assets/" + meal + ".jpeg'>";

}
