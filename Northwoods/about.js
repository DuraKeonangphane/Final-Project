function validateForm() {
 var x = document.forms["myForm"]["nameInput"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
} 