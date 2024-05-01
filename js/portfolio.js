
// sidebar
function openSlideMenu(){
    document.getElementById('side-menu').style.width = '250px';
   
 }
 
 function closeSlideMenu(){
    document.getElementById('side-menu').style.width = '0';
    
 }



/* Auto text */
let typed = new Typed(".tolu", {
   strings:[  "Design Website", "are Web Developer"],
   typeSpeed: 100,
   BackSpeed: 60,
   loop: true
})


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



/* Mixitup */
let mixerportfolio = mixitup(".work_container", {
   selectors: {
       target: ".work_card"
   },
   animation: {
       duration: 300
   }
});

/* link active work */
const linkWork = document.querySelectorAll(".work_item")

function activeWork(){
    linkWork.forEach(l=> l.classList.remove("active-work"))
    this.classList.add("active-work")
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))


/*woek popup */
document.addEventListener("click", (e) =>{
   if(e.target.classList.contains("work_button")){
       togglePortfolioPopup();
       portfolioItemDetails(e.target.parentElement);
   }
})

function togglePortfolioPopup(){
   document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
   document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
   
   document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
   
     document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}







     
 






