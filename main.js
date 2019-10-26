with(document) {
 function dcl() {
  alert(9);
  removeEventListener("DOMContentLoaded", dcl);
 }; 
 addEventListener("DOMContentLoaded", dcl);

}
