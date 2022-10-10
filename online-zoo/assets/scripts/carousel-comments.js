const testimonials = document.querySelector('.testimonials');
const scrollbar = testimonials.querySelector('.testimonials__scrollbar');
const wrapper = testimonials.querySelector('.testimonials__wrapper');
const commentsContainer = wrapper.querySelector('.testimonials__comments');
const comment = commentsContainer.querySelector('.comments__comment');

let fullWidth = commentsContainer.offsetWidth;
let commentWidth = comment.offsetWidth;

scrollbar.oninput = function(event) {
	let spaceBetween = commentsContainer.offsetWidth - comment.offsetWidth * 12;

	let scrollOffset = comment.offsetWidth + spaceBetween/11;
	if (scrollbar.value == 1) {
		commentsContainer.style.marginLeft = "";
	} else {
		commentsContainer.style.marginLeft = -((scrollbar.value-1) * scrollOffset) + 'px';
	}
}

window.onresize = () => {
	commentsContainer.style.marginLeft = "";
	scrollbar.value = 1;
}