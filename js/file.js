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

//indice attuale è 0
let currentImgIndex = 0;
console.log(currentImgIndex)


for (let i = 0;  i < images.length; i++) {  
    //aggiungo dentro al slider-container un tag img con indice 0
    sliderContainerEl.innerHTML += `<img src="${images[i]}" class="slider-img">`;
   
    console.log(sliderContainerEl)
    // // currentImgIndex++; 

    const sliderImgEl = document.querySelector( `.slider-container :nth-child( ${currentImgIndex + 1} )` );
    console.log(sliderImgEl)

    if ( i === 0 ) {
      sliderImgEl.classList.add("d-block");
    }


}


    // //prendo il tag img figlio di slider-container
    // const sliderImgEl = document.querySelector( `.slider-container :nth-child( ${currentImgIndex + 1} )` );
    // console.log(sliderImgEl)
    // console.log(currentImgIndex)

//prendo i button da html
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
console.log( btnNext, btnPrev);

btnNext.addEventListener("click", function() {
    console.log("hai cliccato il btn next");

    // c'è un'immagine che ha la classe d-block
    // da quell'immagine togli la classe
    const oldImage = document.querySelector( `.slider-container :nth-child( ${currentImgIndex + 1 } )` );
    console.log('old image', oldImage);

    oldImage.classList.remove("d-block");

    // incrementi o decrementi la variabile currentImgIndex

    // verificare che il nuovo currentImgIndex non sia oltre i limiti
    // se lo è o lo mettiamo a zero (se il bottone è next), altirmenti il contrario

    // e quella dopo la mostri dandole d-block

      //incremento il contatore dell' valore images
        currentImgIndex++;

        if ( currentImgIndex > (images.length - 1)){
          currentImgIndex = 0 ;
        }        
      
       //aggiorno scr dell'immagine perndendo l'indice dall'currentimgIndex
       const newImage = document.querySelector( `.slider-container :nth-child( ${currentImgIndex + 1} )` );
       newImage.classList.add("d-block");
       
      console.log(currentImgIndex);
});

btnPrev.addEventListener("click", function() {
  console.log("hai cliccato il btn prev");

    //incremento il contatore dell' valore images
      currentImgIndex--;
      console.log(currentImgIndex);

      
    //se currentindeximgindes<0 allora lo reimposto a 0:
    if ( currentImgIndex <= 0 ){
      currentImgIndex = images.length ;
    }

  
});


// ---------------

// for (let i= 0; i < images.length; i++ ) {
//   const currentImgIndex = images[i]

//   const sliderImgEl = document.createElement("img");

//   sliderImgEl.scr = currentImgIndex;

//   sliderContainerEl.append(sliderImgEl)
// }

// -------





