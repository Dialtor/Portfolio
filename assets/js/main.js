/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== PORTFOLIO FILTER ===============*/
const filterContainer=document.querySelector(".portfolio-filter"),
filterBtns=filterContainer.children,
totalFilterBtn=filterBtns.length,
portfolioItems=document.querySelectorAll(".portfolio-item"),
totalPortfolioItem=portfolioItems.length;

for(let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue=this.getAttribute("data-filter");
        for(let k=0; k<totalPortfolioItem; k++){
            if(filterValue === portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.remove("hide");	
                portfolioItems[k].classList.add("show");
            }
            else{
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");	
            }
            if(filterValue === "all"){
                portfolioItems[k].classList.remove("hide");	
                portfolioItems[k].classList.add("show");	
            }
        }

    })
}


