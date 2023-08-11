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




// skills-tab
const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
   tab.addEventListener("click", () =>{
      const target = document.querySelector(tab.dataset.target)

      tabContent.forEach(tabContents =>{
        tabContents.classList.remove('skills_active')
      })

      target.classList.add('skills_active')


      tabs.forEach(tab =>{
         tab.classList.remove('skills_active')
       })
 
       tab.classList.add('skills_active')
   })
})



 /* Scroll top */
 let scrollTop = document.querySelector(".backto-top");

 window.addEventListener("scroll", () => {
     scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
 }) 
 