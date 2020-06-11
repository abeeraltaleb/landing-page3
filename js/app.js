/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/


/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/





//Define Global Variables
const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

let  c=1;

sections.forEach(section => {

const sectionID = section.id;
//create li tag
var list_q = document.createElement("li");
//create a tag
var a = document.createElement('a');
//create hybertext
var link = document.createTextNode(sectionID);
//insert text to a tag
a.appendChild(link);
//insert title to a tag
a.title = sectionID;
//add a tag to list_q
list_q.appendChild(a);
// add class
a.className = "menu__link";
a.id = c;
//insert list_q to to navbar__list
document.getElementById("navbar__list").appendChild(list_q);
c++;
});


let  b=1;
//loop to create ancrs for sections
sections.forEach(section => {
config = {behavior: 'smooth'}
let sectionID = section.id;
sectionID= document.getElementById(sectionID);
butn = document.getElementById(b);
//listen to click
butn.addEventListener('click', (event)=>{
// scroll to section
sectionID.scrollIntoView(config);
})
b++;
});



//get location of section
let section11 = document.getElementById("section1");
let section1L = section11.offsetTop;
let section22 = document.getElementById("section2");
let section2L = section22.offsetTop;
let section33 = document.getElementById("section3");
let section3L = section33.offsetTop;
let section44 = document.getElementById("section4");
let section4L = section44.offsetTop;

function myFunction() {
  //check user scrol agsent section locaion

  if (window.pageYOffset >= section1L && window.pageYOffset<section2L) {
    //add class
 document.getElementById("1").classList.add("test");

  }
  else {
    //remove class
  document.getElementById("1").classList.remove("test");
  }


  if (window.pageYOffset >= section2L && window.pageYOffset<section3L)  {
  document.getElementById("2").classList.add("test2");
  }
  else {
  document.getElementById("2").classList.remove("test2");
  }


  if (window.pageYOffset >= section3L && window.pageYOffset<section4L)  {
  document.getElementById("3").classList.add("test3");
  }
  else {
  document.getElementById("3").classList.remove("test3");
  }


  if (window.pageYOffset >= section4L) {
  document.getElementById("4").classList.add("test4");
  }
  else {
  document.getElementById("4").classList.remove("test4");
  }


}







/*
my first try
 sec1 = document.getElementById('section1');
 sec2 = document.getElementById('section2');
 sec3 = document.getElementById('section3');
 sec4 = document.getElementById('section4');

but1 = document.getElementById('1');
but2 = document.getElementById('2');
but3 = document.getElementById('3');
but4 = document.getElementById('4');






but1.addEventListener('click', (event)=>{

	sec1.scrollIntoView(config);
})

but2.addEventListener('click', (event)=>{
	sec2.scrollIntoView(config);
})

but3.addEventListener('click', (event)=>{
	sec3.scrollIntoView(config);
})

but4.addEventListener('click', (event)=>{
	event.stopPropagation();
	sec4.scrollIntoView(config);
})

config = {behavior: 'smooth'}
*/
