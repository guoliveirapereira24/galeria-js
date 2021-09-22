"use strict"

const imagens = [
    "./img/Cris.jpg",
    "./img/Liz.jpg",
    "./img/balu2.png",
    "./img/Arthur2.jpg",
    "./img/Thiago.jpg",
    "./img/Erin2.png",
    "./img/joui5.jpg",
    "./img/Kaiser3.jpg",
    "./img/Dante2.jpg",
    "./img/Beatrice.jpg",
    "./img/Alex.jpg"
]

// MAP - FILTER - REDUCE -> Declarativa

const criarItem = (urlImagem) => {
 /*   const container = document.querySelector(".galeria-container")
    
    const novoLink = document.createElement("a")
    novoLink.href = urlImagem 
    novoLink.classList.add("galeria-items")
    novoLink.innerHTML = `<img src="${urlImagem}" alt=""></img>`
    
    container.appendChild(novoLink)


    /*container.innerHTML += `
        <a href="${urlImagem}" class="galeria-items">
            <img src="${urlImagem}" alt="">
        </a>
    `
    */
}


const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()
