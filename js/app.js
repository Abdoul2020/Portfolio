// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name=document.querySelector(".name").value
  let email=document.querySelector(".email").value
  let subject=document.querySelector(".subject").value
  let message=document.querySelector(".message").value



  

  console.log(
    name,email,subject,message
  );

    document.querySelector(".contact-form").reset();

    try{
  sendEmail(
    name,email,subject,message
  );
}
  catch(e){
    localStorage.setItem('mailsended', 'false');
  }
}

function sendEmail(
  name,email,subject,message
) {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "webcontactmessages@gmail.com",
    Password : "wayihgreowgppfnn",
    To: "abdoulkowiyy2020@gmail.com",
    From: `${email}`,
    Subject: `${name} sent you a message`,
    Body: `Name: ${name} <br/>
         Email: ${email} <br/> 
         Message: ${message}`,

  }).then((message) =>
  localStorage.setItem('mailsended', 'true'));
}
