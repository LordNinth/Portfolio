const mainNav = document.querySelector("#mainNav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', ()=>{
    const visibility = mainNav.getAttribute('data-visible')

    if (visibility ==='false'){
        mainNav.setAttribute('data-visible', true);
    } else if(visibility === 'true'){
    mainNav.setAttribute('data-visible', false);
   }
});


