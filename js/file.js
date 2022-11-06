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
sliderContainerEl.innerHTML += `<img src="${images[1]}" class="slider-img">`;
sliderContainerEl.innerHTML += `<img src="${images[2]}" class="slider-img">`;
sliderContainerEl.innerHTML += `<img src="${images[3]}" class="slider-img">`;
sliderContainerEl.innerHTML += `<img src="${images[4]}" class="slider-img">`;
console.log(sliderContainerEl)

//indice attuale è 0
let currentImgIndex = 0;
console.log(currentImgIndex)

//prendo il tag img figlio di slider-container
const sliderImgEl = document.querySelector( `.slider container :nth-child( ${currentImgIndex + 1} )` );
console.log(sliderImgEl)
console.log(currentImgIndex)

// for ( let i = 0; i < images.length; i++ ) {
//     //se i=== 0 allora aggiungi la porprietà display block
//     if ( i === 0 ) {
//       sliderImgEl.style("d-block");
//       }
// }

btnNext.addEventListener("click", function() {
    console.log("hai cliccato il btn next");

      //incremento il contatore dell' valore images
        currentImgIndex++;
        console.log(currentImgIndex);
    
});

btnNext.addEventListener("click", function() {
  console.log("hai cliccato il btn prev");

    //incremento il contatore dell' valore images
      currentImgIndex--;
      console.log(currentImgIndex);
  
});