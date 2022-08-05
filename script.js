// ------------ SWIPER JS ------------
var swiper = new Swiper(".swiper", {
  slidesPerView: 2.5,
  spaceBetween: 10,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    500:{
      slidesPerView: 3.5
    },
    900:{
      slidesPerView: 4.5
    },
    1200:{
      slidesPerView: 6.5
    }
  }
});

// AOS JS
AOS.init(
  {
    once: true, 
    duration: 1000
  });

// ------------ IMAGE CARD AND MODAL ------------
function addEvent(currentImgCard){

  // When the user clicks on an image card
  currentImgCard.addEventListener("click", function(){
    
    // Set the Image before displaying the modal
    modalImage.setAttribute('alt', `ZSJL`);
    modalImage.setAttribute('src', `${currentImgCard.currentSrc}`);
    
    // Show modal
    modal.classList.toggle("modal--show");

  });
}

let modal = document.querySelector(".modal");
let modalImage = document.querySelector(".modal .modal__img");
let modalCloseBtn = document.querySelector(".modal .modal__close-btn")
let aListOfImgCards = document.querySelectorAll(".img-card-clickable");

modalCloseBtn.addEventListener("click", function(){ modal.classList.toggle("modal--show"); }); //When the user the clicks the close button when modal is shown

for(let i = 0 ; i < aListOfImgCards.length; i++){ addEvent(aListOfImgCards[i]); }

// ------------ CHARACTER SECTION ------------
function updateDetails(currentCharacterObj){

  // Set the character name and capitalize the first letter
  character__name.textContent = currentCharacterObj.firstName.charAt(0).toUpperCase() + currentCharacterObj.firstName.slice(1);

  // Set the character's thumbnail
  character__thumbnail.setAttribute('src', `img/${currentCharacterObj.thumbnail}`);
  character__thumbnail.setAttribute('alt', `${currentCharacterObj.thumbnailAlt}`);
  
  // Set the character's about
  for(let i = 0; i < character__about.length; i++){
    character__about[i].textContent = currentCharacterObj.about[i];
  }

  // Set the character's image
  for(let i = 0; i < character__image.length; i++){
    character__image[i].setAttribute('src', `img/${currentCharacterObj.images[i]}`);
    character__image[i].setAttribute('alt', `Image of Sylens ${i+1} `);
  }

  characterBackgroundImage.style.backgroundImage = `url('img/${currentCharacterObj.images[0]}')`;

}

let characterBackgroundImage = document.querySelector(".characters-bg");

let select_aloy = document.querySelector("#select-aloy");
let select_sylens = document.querySelector("#select-sylens");
let select_erend = document.querySelector("#select-erend");
let select_varl = document.querySelector("#select-varl");
let select_zo = document.querySelector("#select-zo");
let select_alva = document.querySelector("#select-alva");
let select_kotallo = document.querySelector("#select-kotallo");
let select_regalla = document.querySelector("#select-regalla");

let character__thumbnail = document.querySelector(".character__thumbnail img");
let character__name = document.querySelector(".character__name");
let character__about = document.querySelectorAll(".character__about");
let character__image = document.querySelectorAll(".character__image img");

const aloyObj = {
  firstName: "Aloy",
  about: [
    "The greatest machine hunter in the world of Horizon.", 
    "Strong, independant, clever and compassionate.",
    "She started off as a motherless outcast and rose up to be a champion for all humankind.",
    "About to unravel the mysteries of the Forbidden West and save the planet."
  ],
  thumbnail: "aloy-thumbnail.jpg",
  thumbnailAlt: "Image of Aloy",
  images: ["aloy-img1.jpg", "aloy-img2.jpg", "aloy-img3.jpg"],
  imageAlt: ["Image of Aloy 1", "Image of Aloy 2", "Image of Aloy 3"],
};

const sylensObj = {
  firstName: "Sylens",
  about: [
    "Little is truly known about Sylens.", 
    "A wandering scholar, sage and warrior.",
    "His past is a series of whispers, misdirections, and enigmas – all of which he encourages.",
    "Hidden in the shadows, shall he learn everything about the origins of man and machine."
  ],
  thumbnail: "sylens-thumbnail.jpg",
  thumbnailAlt: "Image of Aloy",
  images: ["sylens-img1.jpg", "sylens-img2.jpg", "sylens-img3.jpg"],
  imageAlt: ["Image of Sylens 1", "Image of Sylens 2", "Image of Sylens 3"],
};

const erendObj = {
  firstName: "Erend",
  about: [
    "One of Aloy's loyal companions.", 
    "Captain of the Vanguard, an elite group of warriors from the Oseram tribe.",
    "Courageous, humorous, and at times, self-effacing.",
    "But beneath that burly exterior is a good heart and a vulnerable soul that Aloy wants to protect."
  ],
  thumbnail: "erend-thumbnail.jpg",
  thumbnailAlt: "Image of Aloy",
  images: ["erend-img1.jpg", "erend-img2.jpg", "erend-img3.jpg"],
  imageAlt: ["Image of Erend 1", "Image of Erend 2", "Image of Erend 3"],
};

const varlObj = {
  firstName: "Varl",
  about: [
    "A warrior from the Nora tribe.", 
    "One of Aloy’s returning companions in Horizon Forbidden West.",
    "Sees Aloy as the Anointed, a religious figure from the Nora’s beliefs who he is duty-bound to help.",
    "Kind and caring, and worries about Aloy as a person and the weight of the burden she carries."
  ],
  thumbnail: "varl-thumbnail.jpg",
  thumbnailAlt: "Image of Varl",
  images: ["varl-img1.jpg", "varl-img2.jpg", "varl-img3.jpg"],
  imageAlt: ["Image of Varl 1", "Image of Varl 2", "Image of Varl 3"],
};

const zoObj = {
  firstName: "Zo",
  about: [
    "Hails from the agrarian tribe of the Utaru.", 
    "Devoted herself to providing care and comfort to her people.",
    "As a young woman, she moved to the Utaru capital to apprentice as a healer.",
    "Zo's agility and archery prowess make her a formidable opponent."
  ],
  thumbnail: "zo-thumbnail.jpg",
  thumbnailAlt: "Image of Zo",
  images: ["zo-img1.jpg", "zo-img2.jpg", "zo-img3.jpg"],
  imageAlt: ["Image of Zo 1", "Image of Zo 2", "Image of Zo 3"],
};

const alvaObj = {
  firstName: "Alva",
  about: [
    "Member of a mysterious new tribe that Aloy encounters in the Forbidden West.", 
    "Curious and brilliant but unsure of herself.",
    "Tasked to help her people interpret the ancient past.",
    "Hopes of finding solutions to the severe weather and Red Blight threatening the tribe."
  ],
  thumbnail: "alva-thumbnail.jpg",
  thumbnailAlt: "Image of Alva",
  images: ["alva-img1.jpg", "alva-img2.jpg", "alva-img3.jpg"],
  imageAlt: ["Image of Alva 1", "Image of Alva 2", "Image of Alva 3"],
};

const kotalloObj = {
  firstName: "Kotallo",
  about: [
    "Raised by the Tenakth Sky Clan.", 
    "Stoic and imposing warrior.",
    "A roving lawgiver who enforces the peace that the tribe's leader, Hekarro, has established.",
    "Places great value on honor and strength, and takes pride in being Tenakth."
  ],
  thumbnail: "kotallo-thumbnail.jpg",
  thumbnailAlt: "Image of Kotallo",
  images: ["kotallo-img1.jpg", "kotallo-img2.jpg", "kotallo-img3.jpg"],
  imageAlt: ["Image of Kotallo 1", "Image of Kotallo 2", "Image of Kotallo 3"],
};

const regallaObj = {
  firstName: "Regalla",
  about: [
    "Fearless and unrelenting.", 
    "Leader of a rebel faction of Tenakth warriors.",
    "Her forces have gained the ability to tame and ride machines, making her a threat to every tribe in the Forbidden West, and beyond.",
    "Effective tactician and warrior, although her reason is shrouded by her blind wrath."
  ],
  thumbnail: "regalla-thumbnail.jpg",
  thumbnailAlt: "Image of Regalla",
  images: ["regalla-img1.jpg", "regalla-img2.jpg", "regalla-img3.jpg"],
  imageAlt: ["Image of Regalla 1", "Image of Regalla 2", "Image of Regalla 3"],
};

select_aloy.addEventListener("click", function(){ updateDetails(aloyObj); });
select_sylens.addEventListener("click", function(){ updateDetails(sylensObj); });
select_erend.addEventListener("click", function(){ updateDetails(erendObj); });
select_varl.addEventListener("click", function(){ updateDetails(varlObj); });
select_zo.addEventListener("click", function(){ updateDetails(zoObj); });
select_alva.addEventListener("click", function(){ updateDetails(alvaObj); });
select_kotallo.addEventListener("click", function(){ updateDetails(kotalloObj); });
select_regalla.addEventListener("click", function(){ updateDetails(regallaObj); });