/* Background change on scroll */
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
}) 


// sidebar
function openSlideMenu(){
  document.getElementById('side-menu').style.width = '250px';
 
}

function closeSlideMenu(){
  document.getElementById('side-menu').style.width = '0';
  
}


// paystack
const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_live_c7302719dd40136a5ab5f1bd189565f15b184d55', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}


     /* Scroll top */
     let scrollTop = document.querySelector(".backto-top");

     window.addEventListener("scroll", () => {
         scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
     }) 
      