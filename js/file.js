//creo array immagini
const images = [
    "imgs/01.webp",
    "imgs/02.webp",
    "imgs/03.webp",
    "imgs/04.webp",
    "imgs/05.webp"
];
console.log(images);

//prendo slide-containet da html
const sliderContainerEl = document.querySelector(".slider-container");
console.log(sliderContainerEl)
//prendo i button da html
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

console.log( btnNext, btnPrev);

//aggiungo dentro al slider-container un tag img con indice 0
sliderContainerEl.innerHTML += `<img src="${images[0]}" class="slider-img">`;
console.log(sliderContainerEl)

//indice attuale è 0
let currentImgIndex = 0;
console.log(currentImgIndex)

//prendo il tag img figlio di slider-container
const sliderImgEl = document.querySelector( `.slider-container > img(${ currentImgIndex + 1 })` );

console.log(sliderImgEl)


//sliderImgEl.src = images[ currentImgIndex ];

btnNext.addEventListener("click", function() {
    console.log("hai cliccato il btn next");

    //incremento il contatore dell' valore images
    currentImgIndex++;

    sliderImgEl.src = images[currentImgIndex];
    console.log(sliderImgEl)

    
});
// for (let i = 0; i < images.lenght; i++ ) {
//     //prendo il tag img figlio di slider-container
//     const sliderImgEl = document.querySelector( ".slider-container :nth-child(${ currenImgIndex + 1})" );
        //
//     if (i === 0) {
//         active = "active"
//         sliderImgEl.classList.add("active")
//     }
// }