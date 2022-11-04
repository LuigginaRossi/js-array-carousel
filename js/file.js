const imgContainerEl = document.querySelector( ".images-container" );
console.log( imgContainerEl)


images=[
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

for (let i = 0; i < images.lenght; i++ ) {
    imgContainerEl.innerHTML += `<img src="${images}" class="img-container">`;
}