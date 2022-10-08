const header = document.querySelector('.header');
const btn = header.querySelector('.header__burger-btn');
const blur = document.querySelector(".blurred-background");


function toggleBurgerMenu (event) {

	blur.classList.toggle("blurred-background--on");
    
	if ( header.classList.toggle("header--opened") ) {
		disableScroll();
        blur.onpointerup = toggleBurgerMenu;
	} else {
		enableScroll();
        blur.onpointerup = null;
	}
}

btn.onpointerup = toggleBurgerMenu;


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}