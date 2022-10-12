const animalCardBlock = document.querySelector('.animals-card');

const animalCardCollection = animalCardBlock.getElementsByClassName("card");

const line1 = animalCardBlock.querySelector('.animals-card__line-1');
const line2 = animalCardBlock.querySelector('.animals-card__line-2');

const line1Sec1 = line1.querySelector('.animals-card__line-1-sec-1');

const prevBtn = animalCardBlock.querySelector(".animals-card__arrow-btn-prev");
const nextBtn = animalCardBlock.querySelector(".animals-card__arrow-btn-next");

let animalCardsInfo = [
	{name: "Ara", cap: "Central and South America", type: "herbivorous", img: "Ara.jpg"},
	{name: "Asian black bear", cap: "Native to Asia", type: "carnivorous", img: "Asian black bear.jpg"},
	{name: "Bisons", cap: "Native to North America", type: "herbivorous", img: "American_Bison_AdF.jpg"},
	{name: "Brown bear", cap: "Eurasia and North America", type: "carnivorous", img: "brown-bear.jpg"},
	{name: "Capybaras", cap: "Native to South America", type: "herbivorous", img: "Capybaras.jpg"},
	{name: "European wildcats", cap: "Native to continental Europe", type: "carnivorous", img: "European wildcats.jpg"},
	{name: "Giraffes ", cap: "Native to Africa", type: "herbivorous", img: "zhiraf.jpg"},
	{name: "Hyenas", cap: "Native to Africa", type: "carnivorous", img: "Hyenas.jpg"},
	{name: "Llamas", cap: "Native to South America", type: "herbivorous", img: "Llama.jpg"},
	{name: "Lions", cap: "Native to Africa and India", type: "carnivorous", img: "lions.jpg"},
	{name: "Bobcats", cap: "Native to North America", type: "carnivorous", img: "Bobcats.jpg"},
	{name: "Raccoons", cap: "Native to America", type: "carnivorous", img: "raccoons.jpg"},
	{name: "Raccoons", cap: "Middle East and the Caucasus mountain", type: "carnivorous", img: "Syrian brown bear.jpg"},
	{name: "Tigers", cap: "Native to South East Asia", type: "carnivorous", img: "tigers.jpg"},
	{name: "Zebras", cap: "Native to Africa", type: "herbivorous", img: "Plains_Zebra_Equus_quagga.jpg"},
	{name: "giant Pandas", cap: "Native to Southwest China", type: "herbivorous", img: "pandas.png"},
	{name: "eagles", cap: "Native to South America", type: "carnivorous", img: "eagles.png"},
	{name: "gorillas", cap: "Native to Congo", type: "herbivorous", img: "gorillas.png"},
	{name: "Two-toed Sloth", cap: "Mesoamerica, South America", type: "herbivorous", img: "2-toed-sloth.png"},
	{name: "cheetahs", cap: "Native to Africa", type: "carnivorous", img: "cheetash.png"},
	{name: "Penguins", cap: "Native to Antarctica", type: "carnivorous", img: "penguins.png"}
];

animalCardsInfo.sort(() => Math.random() - 0.5);

let animalCollIndex = 0;
for (let card of animalCardCollection) {
	card.querySelector(".card__img").src = "../../assets/images/sec-2/animals_cards/" + animalCardsInfo[animalCollIndex].img;

	let txtElem = card.querySelector(".card__text");

	txtElem.classList.remove("card__text--carnivorous");
	txtElem.classList.remove("card__text--herbivorous");
	txtElem.classList.add("card__text--" + animalCardsInfo[animalCollIndex].type);

	txtElem.querySelector(".card__name").innerText = animalCardsInfo[animalCollIndex].name;
	txtElem.querySelector(".card__cap").innerText = animalCardsInfo[animalCollIndex].cap;

	animalCollIndex++;
}

var turn = 1;
var animationTime = false;

line1.style.marginLeft = "0px";
line2.style.marginLeft = "0px";

nextBtn.onpointerup = function (event) {
	if (animationTime) {
		return;
	} else {
		animationTime = true;
		setTimeout(() => animationTime = false, 1000);
	}


	let spaceBetween = (line1.offsetWidth - line1Sec1.offsetWidth * 3) / 2;
	if (turn >= 3) {
		line1.style.marginLeft = "0px";
		line2.style.marginLeft = "0px";
		turn = 1;
		return;
	} else {
		line1.style.marginLeft = -(line1Sec1.offsetWidth + spaceBetween) + parseInt(line1.style.marginLeft) + "px";
		line2.style.marginLeft = -(line1Sec1.offsetWidth + spaceBetween) + parseInt(line2.style.marginLeft) + "px";
		turn++;
		return;
	}
}

prevBtn.onpointerup = function (event) {
	if (animationTime) {
		return;
	} else {
		animationTime = true;
		setTimeout(() => animationTime = false, 1000);
	}

	let spaceBetween = (line1.offsetWidth - line1Sec1.offsetWidth * 3) / 2;
	if (turn == 1) {
		line1.style.marginLeft = -(line1Sec1.offsetWidth + spaceBetween)*2 + "px";
		line2.style.marginLeft = -(line1Sec1.offsetWidth + spaceBetween)*2 + "px";
		turn = 3;
		return;
	} else {
		line1.style.marginLeft = (line1Sec1.offsetWidth + spaceBetween) + parseInt(line1.style.marginLeft) + "px";
		line2.style.marginLeft = (line1Sec1.offsetWidth + spaceBetween) + parseInt(line2.style.marginLeft) + "px";
		turn--;
		return;
	}
}

window.onresize = () => {
	line1.style.marginLeft = "0px";
	line2.style.marginLeft = "0px";
	turn = 1;
}