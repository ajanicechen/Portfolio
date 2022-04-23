window.addEventListener('load', createPortfolio)

let projects = [
    {
        name: "Food Magazine",
        image: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/05/acnh-best-villagers.jpg",
        description: "b",
        url: "c"
    },
    {
        name: "Cattack to Attack",
        image: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/05/acnh-best-villagers.jpg",
        description: "b",
        url: "c"
    },
    {
        name: "HoloHome",
        image: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/05/acnh-best-villagers.jpg",
        description: "b",
        url: "c"
    },
    {
        name: "Rest:API",
        image: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/05/acnh-best-villagers.jpg",
        description: "b",
        url: "c"
    }
]

let homeSection = document.getElementById('homeSection')
let aboutSection = document.getElementById('aboutSection')
let skillsSection = document.getElementById('skillsSection')
let portfolioSection = document.getElementById('portfolioSection')
let portfolioCardsContainer = document.getElementById('portfolioCardsContainer')

let contentContainer = document.getElementById('contentContainer').children

function createPortfolio(){
    for (let project of projects){
        //create cards
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('portfolioCard')

        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        let pName = document.createElement('h5')
        pName.classList.add('card-title')
        pName.innerText = project.name

        let pImg = document.createElement('img')
        pImg.classList.add('card-img-top')
        pImg.src = project.image

        //append cards to parent
        portfolioCardsContainer.appendChild(card)
        card.appendChild(pImg)
        card.appendChild(cardBody)
        cardBody.appendChild(pName)
        
    }
}


function changeContent(button_id){
    
    // console.log(button_id)

    for(let i = 0; i < contentContainer.length; i++){
        contentContainer[i].classList.add('hidden')
    }

    switch(button_id){
        case 'homeBtn' : homeSection.classList.remove('hidden') ; break ;
        case 'aboutBtn' : aboutSection.classList.remove('hidden') ; break ;
        case 'skillsBtn' : skillsSection.classList.remove('hidden') ; break ;
        case 'portfolioBtn' : portfolioSection.classList.remove('hidden') ; break ;

    }
}