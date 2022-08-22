window.addEventListener('load', init)

let projects = [
    {
        name: "Hakizen's Commission Form",
        image: {
            banner: "./images/hakizen_banner.png",
            screenshot: "./images/hakizen_screenshot.png"
        },
        description:    "During this project I developed a reservationsystem for my good friend Mel/Hakizen. " + 
                        "With this system, her Social Media followers could easily commission her by sumbitting a form. "+
                        "For this project I was in charge of designing and developing the website as well as target audience research and testing the product. ",
        tags: "Interviews, making wireframes and styleguide, build back-end and connecting it to database using PHP, build front-end using HTML, CSS and jS, test product with target audience",
        url: { 
            demo: "https://www.youtube.com/watch?v=R6ib5uOazJ8",
            app: ""
        }
    },
    {
        name: "Cattack to Protecc",
        image: {
            banner: "./images/cattack_banner.png",
            screenshot: "./images/cattack_screenshot.png"
        },
        description:    "Protect The Acatemy of Wizardy Cats as Hocus The Cat from evil rats and mice sent by Demon Lord Uri! " + 
                        "Use everything you learned at The Acatemy and fight until the very end! " +
                        "Cattack to Protecc is a clickable webbrowser game I made in my first year. " +
                        "For this project I was in charge of desiging and developing the game. ", 
        tags: "Conceptualize, designing and drawing game sprites, program back-end and front-end (HTML, CSS and TypeScript)",
        url: { 
            demo: "",
            app: "https://ajanicechen.github.io/Cattack-to-Protecc/"
        }
    },
    // {
    //     name: "Laravel CRUD",
    //     image: {
    //         banner: "./images/cattack_banner.png",
    //         screenshot: "./images/cattack_screenshot.png"
    //     },
    //     description: "Laravel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     tags: "Conceptualize, build back-end and connect to database using PHP/Laravel Framework, build front-end using HTML, Bootstrap/CSS and JavaScript",
    //     url: { 
    //         demo: "",
    //         app: "https://ajanicechen.github.io/Cattack-to-Protecc/"
    //     }
    // },
    {
        name: "HoloHome",
        image: {
            banner: "./images/holohome.png",
            screenshot: "./images/holohome_screenshot.png"
        },
        description:    "Bring concerts to your livingroom with HoloHome! With HoloHome it's possible to view concerts of your favorite artists at home. " +
                        "The product itsself consists of two components: the HoloHome application and the HoloCone. The HoloHome application is where you can browse for concerts, " +
                        "add them to your favorites and view. The HoloCone is a cone formed object that you can place on your device. It will project the model of the artist in 3D into your living room. " +
                        "As an agency, I worked With four other members for our client named ThunderBoom Records, a record company with AI-powerd music and artists. " +
                        "In this project I was in charge of wireframes, creating a charatcer, making placeholder content as example, video editing and front-end development. ",
        tags: "Conceptualize, interviewing target audience, making wireframes and a styleguide, building prototypes, testing prototypes, making character model using PMX Editor, editing choreography of model using MikuMikuDance, editing tutorial video using DavinciResolve",
        url:     { 
            demo: "https://youtu.be/2OChiWkDt5U",
            app: ""
        }
    },
    {
        name: "Style Transfer",
        image: {
            banner: "./images/s_transfer_banner.png",
            screenshot: "./images/s_transfer_screenshot.png"
        },
        description:    "With Neural Style Transfer, you can blend two images together: a content image and a style reference image. " +
                        "The style reference image is with one of my own digital drawings and the content image is one the user provides by uploading. " +
                        "Blending the two images together results in an output image that looks like the content image, but painted in the style of the reference image. ",
        tags: "Conceptualize, training AI, program back-end and front-end (HTML, CSS and jS), building prototype, testing prototype",
        url:    { 
            demo: "https://youtu.be/ewtF3Dbkyvo",
            app: "https://stud.hosted.hr.nl/0999525/PRG8-Week9/"
        }
    },
    {
        name: "EGR Planner",
        image: {
            banner: "./images/egr_banner.jpeg",
            screenshot: "./images/egr_screenshot.jpeg"
        },
        description:    "EGR Planner is an application which aims to make traveling more sustainable by providing insight on how much a means of transport emits while traveling. " +
                        "With this application, we were hoping to make people think twice about the effects of their choice of transport, making the most green option. " +
                        "In this project I was in charge of wireframes, target audience research, pitching, filming and video editing.",
        tags: "Conceptualize, making wireframes, building prototypes, target audience research, React-Native, Expo-API",
        url:    { 
            demo: "https://youtu.be/glpZ20-gevA",
            app: ""
        }
    }
]

//all sections
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

//initialize on load of webpage
function init(){
    createPortfolio()

    detailsBtn = document.getElementsByClassName("detailBtn")
    for (let i = 0; i < detailsBtn.length; i++){
        detailsBtn[i].addEventListener("click", () => showDetails(i))
    }
    
    //hide content when you click on btn-close
    closeBtn = document.getElementById("btn-close")
    closeBtn.addEventListener("click", () => hideContent())
}

//shows detail in a modal
function showDetails(project){
    // console.log(`${projects[project].name} card is clicked`)

    //project image
    modalImg = document.getElementById("modalImg")
    modalImg.src = projects[project].image.screenshot

    //project title
    modalTitle = document.getElementById("modalTitle")
    modalTitle.innerText = projects[project].name

    //project description
    modalDescription = document.getElementById("modalDescription")
    modalDescription.innerText = projects[project].description

    //project tags/tasks
    modalFooter = document.getElementById("modalFooter")
    modalFooter.innerText = `Tasks: ${projects[project].tags}`
    
    //content is default hidden, so add new class to display block
    modal.classList.add("notHidden")
}

//remobes the not hidden class to hide content
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
        pDemo.innerText = "Showcase"
        pDemo.classList.add('externalBtn')
        //url may not exist, hide the button
        if(project.url.demo == ""){
            pDemo.classList.add('hidden')
        }

        //link to app
        let pApp = document.createElement('a')
        pApp.href = project.url.app
        pApp.setAttribute('target', '_blank')
        pApp.innerText = "App"
        pApp.classList.add('externalBtn')
        //url may not exist, hide the button
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