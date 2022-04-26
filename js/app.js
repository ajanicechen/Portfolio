window.addEventListener('load', init)

let projects = [
    {
        name: "Food Magazine",
        image: {
                banner: "./images/magazine_banner.png",
                screenshot: "./images/magazine_screenshot.png"
        },
        description: "Food Mag Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url: { 
            demo: "",
            app: ""
        }
    },
    {
        name: "Cattack to Attack",
        image: {
            banner: "./images/cattack_banner.png",
            screenshot: "./images/cattack_screenshot.png"
        },
        description: "Cattack Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url: { 
            demo: "",
            app: "https://ajanicechen.github.io/Cattack-to-Protecc/"
        }

    },
    {
        name: "HoloHome",
        image: {
            banner: "./images/holohome.png",
            screenshot: "./images/holohome_screenshot.png"
        },
        description: "HoloHome Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url:     { 
            demo: "https://youtu.be/2OChiWkDt5U",
            app: ""
        }

    },
    {
        name: "Animal Crossing Rest:API",
        image: {
            banner: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2020/05/acnh-best-villagers.jpg",
            screenshot: ""
        },
        description: "REST API Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url:    { 
            demo: "https://www.youtube.com/shorts/lOf8LnFmU6Y",
            app: ""
        }
    },
    {
        name: "Style Transfer",
        image: {
            banner: "./images/s_transfer_banner.png",
            screenshot: "./images/s_transfer_screenshot.png"
        },
        description: "Style Transfer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        url:    { 
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

let detailsBtn
let closeBtn
let modal = document.getElementById("modal")
let modalDescription
let modalTitle
let modalImg
let modalFooter


function init(){
    createPortfolio()

    detailsBtn = document.getElementsByClassName("detailBtn")
    for (let i = 0; i < detailsBtn.length; i++){
        detailsBtn[i].addEventListener("click", () => showDetails(i))
    }
    
    closeBtn = document.getElementById("btn-close")
    closeBtn.addEventListener("click", () => hideContent())

    // Dispatch DOMContentLoaded to activate Flowbite again

    window.document.dispatchEvent(new Event("DOMContentLoaded", {
    bubbles: true,
    cancelable: true
    }));

}

function showDetails(project){
    // console.log(`${projects[project].name} card is clicked`)

    modalImg = document.getElementById("modalImg")
    modalImg.src = projects[project].image.screenshot

    modalTitle = document.getElementById("modalTitle")
    modalTitle.innerText = projects[project].name

    modalDescription = document.getElementById("modalDescription")
    modalDescription.innerText = projects[project].description



    // modalFooter = document.getElementById("modalFooter")
    // modalFooter.innerHTML = `<a src="${projects[project].url.app}">Try ${projects[project].name} right now</a>`
    
    modal.classList.add("notHidden")
}

function hideContent(){
    modal.classList.remove("notHidden")
}

function createPortfolio(){

    for (let project of projects){
        //create cards
        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('portfolioCards')

        //card body
        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        //title of project
        let pName = document.createElement('h5')
        pName.classList.add('card-title')
        pName.innerText = project.name

        //project img banner
        let pImg = document.createElement('img')
        pImg.classList.add('card-img-top')
        pImg.src = project.image.banner

        let externalBtnDiv = document.createElement('div')
        // externalBtnDiv.classList.add('test')

        //details button
        let pDetail = document.createElement('a')
        pDetail.innerText = "Details"
        pDetail.classList.add('externalBtn')
        pDetail.classList.add('detailBtn')

        //link to demo vid
        let pDemo = document.createElement('a')
        pDemo.href = project.url.demo
        pDemo.setAttribute('target', '_blank')
        pDemo.innerText = "Video"
        pDemo.classList.add('externalBtn')
        if(project.url.demo == ""){
            pDemo.classList.add('hidden')
        }

        //link to app
        let pApp = document.createElement('a')
        pApp.href = project.url.app
        pApp.setAttribute('target', '_blank')
        pApp.innerText = "App"
        pApp.classList.add('externalBtn')
        if(project.url.app == ""){
            pApp.classList.add('hidden')
        }


        //append cards to parent
        portfolioCardsContainer.appendChild(card)
        card.appendChild(pImg)
        card.appendChild(cardBody)
        cardBody.appendChild(pName)
        cardBody.appendChild(externalBtnDiv)
        externalBtnDiv.appendChild(pDetail)
        externalBtnDiv.appendChild(pDemo)
        externalBtnDiv.appendChild(pApp)
        // cardBody.appendChild(pDescription)
        
    }
}

function changeContent(button_id){
    
    // console.log(button_id)

    for(let i = 0; i < contentContainer.length; i++){
        contentContainer[i].classList.add('hidden')
    }

    switch(button_id){
        case 'homeIcon' : homeSection.classList.remove('hidden') ; break ;
        case 'homeBtn' : homeSection.classList.remove('hidden') ; break ;
        case 'aboutBtn' : aboutSection.classList.remove('hidden') ; break ;
        case 'skillsBtn' : skillsSection.classList.remove('hidden') ; break ;
        case 'portfolioBtn' : portfolioSection.classList.remove('hidden') ; break ;

    }
}