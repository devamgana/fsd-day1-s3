var head=document.getElementById("head1");
console.log(head);
head.style.color="blue";
head.textContent="text content changed";
 head.innerHTML="<h6>changed in to h6</h6>";
 var c=document.getElementsByClassName("list");
 for(let i=0;i<c.length;i++){
      c[i].style.backgroundColor="yellow";
 }
 var t=document.getElementsByTagName("li")
t[1].style.color="red"
// //uing query selector
 var  valE=document.querySelector("input");
 valE.value = "name"

// //query selector using id
var saveBtn=document.querySelector("#saveBtn");
saveBtn.style.backgroundColor="green"
