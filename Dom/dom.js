console.log(document.all[19]) ;
//console.log(document.getElementById("header-title"));
//
const myheader = document.getElementById("header-title") ;
console.log(myheader);
//second method - based on class - could be access multile elements
const listitems = document.getElementsByClassName('list-group-item');
console.log(listitems);
//third method - based on tag - 
 const myform = document.getElementsByTagName("form");
 console.log(myform);
 //fourth method- using query selector 
 const myselector = document.querySelector("#header-title");
 console.log(myselector);
 //fifth method - point to be noted 
 const mylist = document.querySelectorAll(".list-group-item");
 console.log(mylist);
////Dorm manipulation methods 
//text- content - is whatever is written between opening and closing tag
myselector.textContent = "welcometodom";
//inner-html
myselector.innerHTML = "<h2> welcome to dom </h2>";
document.querySelector("#mydiv").innerHTML = "<p> hello...</p>"
//css with javascript 
const secondHeading = document.querySelector("#secondheading");
secondHeading.style.backgroundColor = 'purple'
secondHeading.style.color = 'white'
// setTimeout( () => {
//     secondHeading.style.backgroundColor = 'purple'
//     secondHeading.style.color = 'white'
//     secondHeading.style.padding = '10px'
//     secondHeading.style.textAlign = 'center'
// }, 3000)
const Head = document.getElementById("heading1").textContent = "Flower";
console.log(Head);

const listitem = document.getElementsByClassName("list-group-item");
console.log(listitem);
for(let i = 0 ;i < listitem.length ; i++)
{
if(i% 2 == 0)
{
 listitem[i].style.backgroundColor = "grey";
}
}
const mybtn = document.getElementById("btn")
console.log(mybtn);
mybtn.addEventListener('click',() =>
{
console.log("my button was clicked") 
})

const item1 = document.getElementById("item-one")

item1.addEventListener('dblclick',() =>
{
console.log("clicked");
})

document.getElementById("heading1").addEventListener('dblclick', () =>
{
    console.log("hello")
})
   
setTimeout( () => {
    console.log("after timeout....")

},3000)
console.log("without timeout")

document.getElementById("submitBtn").addEventListener("click",(e) => {
 e.preventDefault()
 console.log(document.getElementById("text-input").value)
})
document.getElementById("text-input").addEventListener("mouseenter",() =>{
   
    console.log("button btn was clicked")

})
document.getElementById("text-input").addEventListener("mouseleave",() => {
console.log("left the text box")
})
document.getElementById("text-input").addEventListener("focus",() => {
    console.log("focused")
})
document.getElementById("text-input").addEventListener('copy',()=>{
    console.log("copied")
})
document.getElementById("text-input").addEventListener('cut',()=>{
    console.log("cut")
})
document.getElementById("text-input").addEventListener('paste',()=>{
    console.log("paste")
})
document.getElementById("text-input").addEventListener('keyup',()=>{
    console.log("keyup")
})
document.getElementById("text-input").addEventListener('keydown',()=>{
    console.log("keydown")
})
document.getElementById("text-input").addEventListener('keypress',(e)=>{
    console.log(e)
})
document.getElementById("text-input").addEventListener('keypress',(e)=>{
    console.log(e.target.value)
})
document.querySelector("#container-box").addEventListener("mouseenter",(e) => {
console.log("entered")
 console.log(document.querySelector("#container-box").style.backgroundColor  = "lightgreen")
})
document.querySelector("#container-box").addEventListener("mouseleave",(e) => {
console.log("left")
console.log(document.querySelector("#container-box").style.backgroundColor  = "purple")
})
//DOM relationships
//parent element 
console.log(document.getElementById("items").parentElement)
//children
console.log(document.getElementById("items").children)
//first-child
console.log(document.getElementById("items").firstChild)//not
console.log(document.getElementById("items").firstElementChild)
//last child
console.log(document.getElementById("items").lastChild)
console.log(document.getElementById("items").lastElementChild)

//siblings-previous and next 
console.log(document.getElementById("head").previousSibling)
console.log(document.getElementById("head").nextSibling)
console.log(document.getElementById("head").previousElementSibling)
console.log(document.getElementById("head").nextElementSibling)
//creating html using css 
const mydiv = document.createElement("div")
console.log(mydiv)
mydiv.textContent= "hii its me "
mydiv.setAttribute("id","my-div")
mydiv.setAttribute("class","my-class") 







