emailjs.init('bpbJNEgchvvRcvBmR');
const result = document.getElementById("result");

function sendEmail() {
    emailjs.sendForm("service_szcwhzc", "template_rj9k0jg", '#contactForm')
    .then(function(response) {
       result.textContent = "Message successfully sent!"; 
       result.style.color = "green";
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       result.textContent = "An unexpected error has occured";
       result.style.color = "red";
       console.log('FAILED...', error);
    });
}