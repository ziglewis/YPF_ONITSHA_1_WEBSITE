
// JS FOR HOME PAGE STARTS HERE


let myOurDriveSection = document.querySelector(".our-drive-3box-container")

let myOurDriveSectionContents = [ 
                                {logo: "vision-icon.png",
                                title: "Vision",
                                alt: "vision icon",
                                content: "To be the frontrunner in raising a generation of young adults known as paragons in their fields of endeavors."
                                },
                                
                                {logo: "mission-icon.png",
                                title: "Mission",
                                alt: "mission icon",
                                content: "To develop, preserve and commission young adult for impact. To raise captains of industry excellence and godliness as their statement."
                                },

                                {logo: "membership-icon.png",
                                title: "Membership",
                                alt: "membership icon",
                                content: "Undergraduates, Corp Members, Fresh Graduate, Young Career Executives, Civil servants, Artisans & Entrepreneurs"
                                }
    
                                ]
                                
                            let ourDriveSectionContentsResults=""
                                
                   let generateMyOurDriveSectionContents = data => {
                       
                    ourDriveSectionContentsResults +=          `
                                                  <div class = " myOurDriveSectionBoxes" >
                                                  <img src = "images/${data.logo}" alt = "${data.alt}" width = 50px>
                                                  <h2> ${data.title} </h2>
                                                  <p> ${data.content} </p>
                                                   `
                                        }  
                                        
            myOurDriveSectionContents.forEach(generateMyOurDriveSectionContents)
            myOurDriveSection.innerHTML = ourDriveSectionContentsResults
              
            
        //  Here i am controlling the event drop down on the nav-bar 
let navBarEventsDropDown = document.querySelector(".navbar-events")
let myPopUpEventsDropDown = document.querySelector(".pop-up-events")
let myRestOfBody = document.querySelector(".rest-of-body")
let navBarEventsDropDownContent = document.getElementById("Event-drop-down")
let myPopUpDropDownContent = document.getElementById("pop-up-Event-drop-down")
let myPopUpEventDropDownContents = document.querySelectorAll(".pop-up-event-dropdown-contents")
let eventArrow = document.getElementById("arrow") //this helps to change the arrow direction on clicking the event on navbar
let myPopUpArrow = document.getElementById("PopUp-arrow")
let myNavBarEvent = document.querySelector(".navbar-events")
let reverseColorFill = document.querySelectorAll(".color-fill")
let myMinimizeIcon = document.querySelector(".minimize-icon")
let myPopUp = document.querySelector(".pop-up")
let myHr = document.querySelector("hr")


 let attachEventListener = (eachData) => {
    eachData.addEventListener("mouseout", function() {
    this.classList.add("color-fill-reverse")    
                 })   }

reverseColorFill.forEach(attachEventListener)

let eventDropDownLive = false //this combined with the showEventsDropDown functions makes it possible for the event to also hide the drop down after it has brought it out by If statement.

let showEventsDropDown = () => {
     
     if (eventDropDownLive === false) {
        //    navBarEventsDropDownContentClasses.forEach(removeEventListener)
    navBarEventsDropDownContent.style.visibility= "visible"
    myNavBarEvent.style.backgroundColor = "rgba(107, 195, 41)"
    myNavBarEvent.style.color = "black"
    eventArrow.textContent = "▲"
    eventDropDownLive = true 
    } else { hideEventsDropDown()}
    
                                }

 let hideEventsDropDown = () => {

    if ( popUpLive === true ) { poUpOnAndOff()} // This will take care the popUp is properly on or off as desired

    navBarEventsDropDownContent.style.visibility = "hidden"
    eventArrow.textContent = "▼"
    myNavBarEvent.style.backgroundColor = "inherit"
    myNavBarEvent.style.color = "inherit"
    eventDropDownLive = false
 }

navBarEventsDropDown.addEventListener ("click", showEventsDropDown)
myRestOfBody.addEventListener ("click", hideEventsDropDown) // because I want when the user clicks outside the popUps they will close.

let popUpDropDownLive = false // This will help check if popupDropdown is alive or toggled on or displaying or not.

let popUpEventContentOnAndOff = () => { 
    let deleteClass = (eachValue) => {eachValue.classList.remove("color-fill-reverse")}
    myPopUpEventDropDownContents.forEach(deleteClass)
    
    if ( popUpDropDownLive === false ) {
        myPopUpDropDownContent.style.display = "flex"
        myPopUpArrow.textContent = "▲"
        myPopUpEventsDropDown.style.backgroundColor = "rgba(107, 195, 41)"
        myPopUpEventsDropDown.style.color = "black"
        popUpDropDownLive = true 
    }else { 
         myPopUpDropDownContent.style.display = "none"
        myPopUpArrow.textContent = "▼"
        myPopUpEventsDropDown.style.backgroundColor = "inherit"
        myPopUpEventsDropDown.style.color = "inherit"
        popUpDropDownLive = false 
         }
}

myPopUpEventsDropDown.addEventListener ("click", popUpEventContentOnAndOff )
    
function reversePopUpGradient(data) {
    data.classList.add("color-fill-reverse")
  }

 let popUpLive = false // serving as a switch to regulate the popUp appearance and disappearance

let poUpOnAndOff = () => {

    if ( popUpLive === false ) {
        myPopUp.style.visibility = "visible"
         myMinimizeIcon.style.backgroundColor = "rgba(107, 195, 41)"
        myHr.style.visibility = "visible"
         popUpLive= true 
    }else { 
        if (popUpDropDownLive === true) { popUpEventContentOnAndOff() } // so that everything opened will be closed
        
        myPopUp.style.visibility = "hidden"
        myMinimizeIcon.style.backgroundColor = "inherit"
        myHr.style.visibility = "hidden"
        popUpLive= false }  
}

  myMinimizeIcon.addEventListener ("click", poUpOnAndOff)

//  All about events drop-down navbar ends here         29th-May-2023


// I am commencing the section two of the page, i.e the HERO page of the website! 30th-may- 13:40pm 2023

        let myBackgroundImages = [


                                { imagePath: "images/backgroundImage4.jpeg",
                                headerLeft: "YPF",
                                headerRight: "Meet-up",
                                content: "A capacity building gathering of young professionals.",
                                footTag: "JOIN HERE",
                                link: "wwwwwww.arg",
                                alt: "Young professionals having a meet-up like a rendezvous"
                                },
                                            
                                { 
                                imagePath: "images/megaSummit.jpg",
                                headerLeft: "YOUNG",
                                headerRight: "PROFESSIONALS FORUM",
                                content: "We have a commitment to bring about the change we desire in our communities.",
                                footTag: "JOIN US",
                                link: "wwwwwww.arg",
                                alt: "Young professionals looking happy and excited"
                                },


                                { 
                                imagePath: "images/skill6.jpg",
                                headerLeft: "YPF",
                                headerRight: "Skill Acquisition",
                                content: "A free intensive Skill Acquisition Programme that enables participants to learn skills that interest them.",
                                footTag: "REGISTER HERE",
                                link: "wwwwwww.arg",
                                alt: "Young professionals in a skill acquisition session "

                                } 
                    
                        ]

        let myHeroWriteup = document.querySelector(".scrol-images-writeup-left")
        let myHeroPageImages = document.querySelector(".scrol-images-background")

    
            let generateHeroContent = dataPoint => {


                myHeroWriteup.innerHTML = ` 
                                <h1 class="hero-head"><span class="Hero-head-span">${dataPoint.headerLeft}</span> ${dataPoint.headerRight}</h1>
                                <p class= "hero-content">${dataPoint.content}</p>
                                <div class= "Hero-footer"> 
                                    <a href = "${dataPoint.link}"> <div class= "Hero-footer-content">${dataPoint.footTag}</div> <div class="Hero-footer-line color-fill"> </div></a>
                                </div>           
                                 `
                                //  myHeroPageImages.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("' + dataPoint.imagePath +' ")'
                               

            }

         
            function getBackgroundImage() {  

                async function backgroundImageDelay() {
            for (let i = 0; i < myBackgroundImages.length; i++) {
            // let individualObjectsInArray = i
            generateHeroContent(myBackgroundImages[i])
            await new Promise(resolve => setTimeout(resolve, 5000))

                 } 
                 backgroundImageDelay()
                 }
                 backgroundImageDelay()
         }

           getBackgroundImage()

        // let backgroundInterval =



         
//         let ourDriveSectionContentsResults=""
                                
//         let generateMyOurDriveSectionContents = data => {
            
//          ourDriveSectionContentsResults +=          `
//                                        <div class = " myOurDriveSectionBoxes" >
//                                        <img src = "images/${data.logo}" alt = "${data.alt}" width = 50px>
//                                        <h2> ${data.title} </h2>
//                                        <p> ${data.content} </p>
//                                         `
//                              }  
                             
//  myOurDriveSectionContents.forEach(generateMyOurDriveSectionContents)
//  myOurDriveSection.innerHTML = ourDriveSectionContentsResults


// //the section two of the page, i.e the HERO page of the website ends here.

// JS FOR HOME PAGE ENDS HERE