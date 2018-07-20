/* 
   Revisions Bookstore and Cafe 
   Filename: script.js

   Author:   Derren
   Date:     17/7/18
   HTML5 and CSS3 Illustrated Unit M, Visual Workshop
 */
var smallerABtn = document.querySelector(".smaller-size");
var defaultABtn = document.querySelector(".selected-button");
var biggerABtn = document.querySelector(".larger-size");
var html = document.querySelector("html");

function smallersize() {
  smallerABtn.className = "selected-button";
  html.className = "smaller-size";
  defaultABtn.className = "html, default-button";
  biggerABtn.className = "larger-size";
}
function biggersize(){
  biggerABtn.className = "selected-button";
  html.className = "larger-size";
  defaultABtn.className = "html, default-button";
  smallerABtn.className = "smaller-size";
}
function defaultsize(){
  defaultABtn.className = "selected-button";
  html.className = "html";
  biggerABtn.className = "larger-size";
  smallerABtn.className = "smaller-size";
}
var clickSmaller = smallerABtn.addEventListener("click",smallersize);
var clickBigger = biggerABtn.addEventListener("click",biggersize);
var clickRegular = defaultABtn.addEventListener("click", defaultsize);