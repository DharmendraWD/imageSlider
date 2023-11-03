// It litterally took me continuously 4 days to make and understand me how a best image 
// slider can be made. Built 3 times but didn't got satisfaction but at last finally 
// learned and understood. 
// The line bellow denotes that a feature code has been ended and started other feature code 
// -----------------------------------------------------------


let slideImg = document.querySelectorAll('#slider Img') 
var slide = document.getElementById("slider");
let indicators = document.querySelector('.indicators')
let nextPrev = document.querySelector('.nextPrev')

let moveFrom = 100;
let clickedIdNum =0;
let imageExactLength = slideImg.length-1;   //Have exact length of total images
let clickSound = document.getElementById("clickSound") // click sound's ID


// Creating bullet icon bellow image 
  slideImg.forEach(function(elem, ind){
    let bulletAppend = document.createElement("button");
    bulletAppend.id=ind;
    indicators.appendChild(bulletAppend)
    })
// ------------------------------------------------------------

// Play click sound affter click on arrow 
function playAfterClickOnArrow(){
    clickSound.play();
}
// ------------------------------------------------------------
let bullets = document.querySelectorAll('.indicators button')      //get all bullets in a variable
bullets[0].style.backgroundColor="rgb(35 225 0)"  //making first bullet active

// CODE ONLY RUNS WHEN CLICK ON BULLETS DOTS 
// Image slide from bullets 
function imageSlideFromBullets(){
    indicators.addEventListener('click', function(elem){
        playAfterClickOnArrow();
        let clickedIdStrin = elem.target.id;     //get the clicked id of bullet
        clickedIdNum = +clickedIdStrin;         //change clickedIdStrin into Numbers
        slide.style.transform = `translateX(-${moveFrom*clickedIdNum}%)`; 
        
        //  clear previous bullets activeness
        bullets.forEach(function(bullet, index){
        bullet.style.backgroundColor=""
        })
        // Make one active bullet 
        bullets[clickedIdNum].style.backgroundColor="rgb(35 225 0)"
        })
}
// -----------------------------------------------------------------------


// CODE ONLY RUNS WHEN NEXT BUTTON CLICKED 
// Slide next image when click on next button and make one active bullet
const imageSlideFromNextBtn = ()=>{
    nextPrev.lastElementChild.addEventListener('click', function(e){
        playAfterClickOnArrow();
        if(clickedIdNum<imageExactLength){   //check if next image available then slide next
        clickedIdNum++;                  //And increament this 
        slide.style.transform = `translateX(-${moveFrom*clickedIdNum}%)`; 
        
        //  clear previous bullets activeness
        bullets.forEach(function(bullet, index){
        bullet.style.backgroundColor=""
        })
        // Make one active bullet 
        bullets[clickedIdNum].style.backgroundColor="rgb(35 225 0)"
        }
        else{                           //If there is not next image available then show it from start
        clickedIdNum=0;
        slide.style.transform = `translateX(-${moveFrom*clickedIdNum}%)`; 
        
            //  clear previous bullets activeness
        bullets.forEach(function(bullet, index){
        bullet.style.backgroundColor=""
        })
        // Make one active bullet 
        bullets[clickedIdNum].style.backgroundColor="rgb(35 225 0)"
        }
        })
}
// -----------------------------------------------------------------------

// CODE ONLY RUNS WHEN PREVIOUS BUTTON CLICKED 
// Slide Previous when click on Previous Button and make one active bullet
let imageSlideFromPrevBtn = () =>{
    nextPrev.firstElementChild.addEventListener('click', function(e){
        playAfterClickOnArrow();
        if(clickedIdNum>0){
        clickedIdNum--;
        slide.style.transform = `translateX(-${moveFrom*clickedIdNum}%)`; 
        
            //  clear previous bullets activeness
        bullets.forEach(function(bullet, index){
        bullet.style.backgroundColor=""
        })
        // Make one active bullet 
        bullets[clickedIdNum].style.backgroundColor="rgb(35 225 0)"
        }
        else{
        clickedIdNum=imageExactLength;
        slide.style.transform = `translateX(-${moveFrom*clickedIdNum}%)`; 
        
            //  clear previous bullets activeness
        bullets.forEach(function(bullet, index){
        bullet.style.backgroundColor=""
        })
        // Make one active bullet 
        bullets[clickedIdNum].style.backgroundColor="rgb(35 225 0)"
        }
        })
}

imageSlideFromBullets();    //Runs When clicked on bullets
imageSlideFromNextBtn();    //Runs when clicked on Next Button
imageSlideFromPrevBtn();    //Runs when clicked on Previous Button

