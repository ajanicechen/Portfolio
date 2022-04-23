window.addEventListener('load', init)

let projects = [
    {
        name: "Food Magazine",
        image: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/05/acnh-best-villagers.jpg",
        description: "b",
        url: 
        { 
            demo: "",
            app: ""
        }
    },
    {
        name: "Cattack to Attack",
        image: "./images/cattack.png",
        description: "b",
        url: 
        { 
            demo: "",
            app: "https://ajanicechen.github.io/Cattack-to-Protecc/"
        }

    },
    {
        name: "HoloHome",
        image: "./images/holohome.png",
        description: "b",
        url:     
        { 
            demo: "https://youtu.be/2OChiWkDt5U",
            app: ""
        }

    },
    {
        name: "Rest:API",
        image: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/05/acnh-best-villagers.jpg",
        description: "b",
        url:    
        { 
            demo: "",
            app: ""
        }
    },
    {
        name: "Style Transfer",
        image: "./images/styleTransfer.png",
        description: "b",
        url:    
        { 
            demo: "https://youtu.be/ewtF3Dbkyvo",
            app: "https://stud.hosted.hr.nl/0999525/PRG8-Week9/"
        }
    }
]

let homeSection = document.getElementById('homeSection')
let aboutSection = document.getElementById('aboutSection')
let skillsSection = document.getElementById('skillsSection')
let portfolioSection = document.getElementById('portfolioSection')
let portfolioCardsContainer = document.getElementById('portfolioCardsContainer')

let contentContainer = document.getElementById('contentContainer').children

let portfolioCards

function init(){
    createPortfolio()

    portfolioCards = document.getElementsByClassName("portfolioCards")
    for (let i = 0; i < portfolioCards.length; i++){
        portfolioCards[i].addEventListener("click", () => showDetails(i))
    }
    
}

function showDetails(project){
    console.log(`${projects[project].name} card is clicked`)
}

function createPortfolio(){

    for (let project of projects){
        //create cards
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('portfolioCards')

        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        let pName = document.createElement('h5')
        pName.classList.add('card-title')
        pName.innerText = project.name

        let pImg = document.createElement('img')
        pImg.classList.add('card-img-top')
        pImg.src = project.image

        // let pDescription = document.createElement('p')
        // pDescription.innerText = project.description

        //append cards to parent
        portfolioCardsContainer.appendChild(card)
        card.appendChild(pImg)
        card.appendChild(cardBody)
        cardBody.appendChild(pName)
        // cardBody.appendChild(pDescription)
        
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