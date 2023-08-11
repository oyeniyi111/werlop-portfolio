// sidebar
function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
   
 }
 
 function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    
 }



/* Background change on scroll */
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
}) 


//Email
function validate(){
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')
    
    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }
        
        else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();


function emptyerror(){
    swal({
  title: "Oh No...",
  text: "Fields cannot be empty!",
  icon: "error",
 
});
}



function sendmail(name, email, msg){
    emailjs.send("service_memnfpd","template_xbf312o",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}


function success(){
    swal({
  title: "Email Sent successfully",
  text: "We reply within 24 hours",
  icon: "success",
 
});
}


 /* Scroll top */
 let scrollTop = document.querySelector(".backto-top");

 window.addEventListener("scroll", () => {
     scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
 }) 