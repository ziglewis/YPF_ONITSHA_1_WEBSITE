








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
            
            //  console.log(ourDriveSectionContentsResults)
            
            // // console.log( myOurDriveSectionContents[0].title)
            
            
        //  Here i am controlling the event drop down on the nav-bar 
let navBarEventsDropDown = document.querySelector(".navbar-events")
let myPopUpEventsDropDown = document.querySelector(".pop-up-events")
let myRestOfBody = document.querySelector(".rest-of-body")
let navBarEventsDropDownContent = document.getElementById("Event-drop-down")
let myPopUpDropDownContent = document.getElementById("pop-up-Event-drop-down")
let myPopUpEventDropDownContents = document.querySelectorAll(".pop-up-event-dropdown-contents")
// let navBarEventsDropDownContentClasses = document.querySelectorAll("#Event-drop-down div")
// console.log(navBarEventsDropDownContentClasses)
let eventArrow = document.getElementById("arrow") //this helps to change the arrow direction on clicking the event on navbar
let myNavBarEvent = document.querySelector(".navbar-events")
let reverseColorFill = document.querySelectorAll(".color-fill")
let myMinimizeIcon = document.querySelector(".minimize-icon")
let myPopUp = document.querySelector(".pop-up")
let myHr = document.querySelector("hr")



 let attachEventListener = (eachData) => {
    eachData.addEventListener("mouseout", function() {
    this.classList.add("color-fill-reverse")    
})
}

reverseColorFill.forEach(attachEventListener)


let eventDropDownLive = false //this combined with the showEventsDropDown functions makes it possible for the event to also hide the drop down after it has brought it out by If statement.

let showEventsDropDown = () => {
     
     if (eventDropDownLive === false) {
        //    navBarEventsDropDownContentClasses.forEach(removeEventListener)
    navBarEventsDropDownContent.style.visibility= "visible"
    myNavBarEvent.style.backgroundColor = "rgba(107, 195, 41)"
    myNavBarEvent.style.color = "black"
    
    //navBarEventsDropDownContentClasses.forEach(attachEventListener)

    eventArrow.textContent = "▲"
    eventDropDownLive = true }
    
    else { hideEventsDropDown()}
    
     }

 let hideEventsDropDown = () => {
    navBarEventsDropDownContent.style.visibility = "hidden"
    eventArrow.textContent = "▼"
    myNavBarEvent.style.backgroundColor = "inherit"
    myNavBarEvent.style.color = "inherit"
  
    eventDropDownLive = false
 }
navBarEventsDropDown.addEventListener ("click", showEventsDropDown)
myRestOfBody.addEventListener ("click", hideEventsDropDown)

let popUpDropDownLive = false

myPopUpEventsDropDown.addEventListener ("click", function(){
    
   let deleteClass = (eachValue) => {eachValue.classList.remove("color-fill-reverse")}
    myPopUpEventDropDownContents.forEach(deleteClass)
    
    if ( popUpDropDownLive === false ) {
        myPopUpDropDownContent.style.display = "flex"
        popUpDropDownLive = true 
    }else { 
         myPopUpDropDownContent.style.display = "none"
        popUpDropDownLive = false 
        
    }
    
})


function reversePopUpGradient(data) {
    data.classList.add("color-fill-reverse")
  }

 let popUpLive = false
  myMinimizeIcon.addEventListener ("click", function(){ 
    
    if ( popUpLive === false ) {
        myPopUp.style.visibility = "visible"
         myMinimizeIcon.style.backgroundColor = "rgba(107, 195, 41)"
        myHr.style.visibility = "visible"
         popUpLive= true 
    }else { 
        myPopUp.style.visibility = "hidden"
        myMinimizeIcon.style.backgroundColor = "inherit"
        myHr.style.visibility = "hidden"
        popUpLive= false }
   
  })

//  All about events drop-down navbar ends here





// JS FOR HOME PAGE ENDS HERE