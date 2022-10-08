const comments = document.querySelector('.comments');
const popup = document.querySelector('.popup');
const closeBtn = popup.querySelector(".popup__close-btn");
const blurBG = document.querySelector(".blurred-background-popup");

comments.onpointerup = function(event) {
	const comment = event.target.closest(".comments__comment");
	if (!comment || window.innerWidth >= 1000) return;

	popup.querySelector(".comments__userpic").src = comment.querySelector(".comments__userpic").src;
	popup.querySelector(".comments__user-name").innerText = comment.querySelector(".comments__user-name").innerText;
	popup.querySelector(".comments__post-info").innerText = comment.querySelector(".comments__post-info").innerText;
	popup.querySelector(".comments__content").innerText = comment.querySelector(".comments__content").innerText;
	popup.style.top = window.pageYOffset + window.innerHeight/2 - popup.offsetHeight/2 + "px";

	blurBG.classList.add("blurred-background-popup--on");
}

closeBtn.onpointerup = function(event) {
	popup.style.top = "";
	blurBG.classList.remove("blurred-background-popup--on");
}

blurBG.onpointerup = function(event) {
	blurBG.classList.remove("blurred-background-popup--on");
	popup.style.top = "";
}