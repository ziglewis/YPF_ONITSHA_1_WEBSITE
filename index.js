

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
            
             console.log(ourDriveSectionContentsResults)
            
            // console.log( myOurDriveSectionContents[0].title)
            
            // myOurDriveSection.innerHTML +=








// JS FOR HOME PAGE ENDS HERE