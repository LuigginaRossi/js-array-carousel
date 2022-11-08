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
    currentImgIndex++; 


    if ( i === 0 ) {
      const sliderImgEl = document.querySelector( `.slider-container :nth-child( ${currentImgIndex } )` );
      console.log(sliderImgEl)

      sliderImgEl.className += (" d-block");

    }

    if ( i === currentImgIndex ) {
      sliderImgEl.className += ("d-block");
    } else{
      sliderImgEl.className = ("d-none");
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

const sliderImgEl = document.querySelector( `.slider-container :nth-child( ${currentImgIndex } )` );
console.log(sliderImgEl)

btnNext.addEventListener("click", function() {
    console.log("hai cliccato il btn next");

      //incremento il contatore dell' valore images
        currentImgIndex++;
      
       //aggiorno scr dell'immagine perndendo l'indice dall'currentimgIndex
       sliderImgEl.scr= images[currentImgIndex];
       

        if ( currentImgIndex > 5){
          currentImgIndex = 0 ;
        }
        

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





