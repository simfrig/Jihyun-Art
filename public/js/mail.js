const contactForm = document.getElementById("contact-form");

  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
  fName: fname.value,
  lName: lname.value,
  email: email.value,
  subject: subject.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/contact.html');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert("Email Sent");
      fname.value = '';
      lname.value = '';
      email.value = '';
      subject.value = '';
    }else{
      alert("Something went wrong!")
    }
  }

  xhr.send(JSON.stringify(formData))
  
});