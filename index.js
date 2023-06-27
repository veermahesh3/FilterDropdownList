
function myFunction(){
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction(){
let input=document.getElementById("myInput");
let filter=input.value.toUppercase();
let div=document.getElementById("myDropdown");
let a=div.getElementsByTagName("a");
for(let i=0;i<a.length;i++){
txtValue=a[i].innerText || a[i].textContent;
if(txtValue.toUppercase().indexOf(filter) > -1){
  a[i].style.display="";
}
else{
  a[i].style.display="none";
}
}
}
