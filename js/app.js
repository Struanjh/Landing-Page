









///FUNCTIONALITY - DYNAMICALLY CREATE THE NAV AND SMOOTH SCROLL BEHAVIOUR///


//Declare Variables//
const sections = document.querySelectorAll('section');
const titles = document.querySelectorAll('h2.sectionTitle');
const existingList = document.querySelector('ul#navbar__list');


function createNav(){
  for(section of sections){
    const newLi = document.createElement('li');
    const newA = document.createElement('a');
    newLi.className = section.id;
    newA.textContent= section.id;
    //Attach the Link to the List Item
    newLi.appendChild(newA);
    //Attach the List Item to unordered list
    existingList.appendChild(newLi);
    //Call the scroll function to test if a nav list item was clicked//
    scrollToTarget(newLi, section)
  }
}

createNav();

function scrollToTarget (clickTarget, scrollTarget) {
  clickTarget.addEventListener("click", (e)=>{
    e.preventDefault;
    scrollTarget.scrollIntoView({behavior: "smooth"})
  })
}




// ATTEMPT 1//




// FUNCTIONALITY 2 -- DIFFERENTIATE THE SECTION OF THE PAGE THE USER IS CURRENTLY ON!//


//store all the nav li's in a variable
const navLi = document.querySelectorAll('#navbar__list li');
//Caculate the number of Nav LI's (which corresponds to number of sections) - store it in navLength Variable
const navLength = navLi.length;


// Add Event Listener
window.addEventListener('scroll', ()=> {
 let current = '';
 //Calculate the distance from the top of the screen for each section and store it in sectionTop variable
 //- this gives the benchmark used to highlight sections
 sections.forEach( section => {
   const sectionTop = section.offsetTop;
   const sectionHeight = section.clientHeight;
  //Test which section is closest to top and gets it's id
   if(pageYOffset >= sectionTop - sectionHeight / navLength) {
     current = section.getAttribute('id');
   }
 });


 //Remove all active id's
 //Test all li classnames against the one stored in current variable, then add a class of active when a match is found.
 //CSS Styling gives active class red background and white font.
 navLi.forEach((li) => {
   li.classList.remove("active");
   if (li.classList.contains(current)) {
     li.classList.add("active");
   }
 });

 //Test all section id's against the one stored in the current variable, add your-active-class if match found, remove if not found//
 //CSS Style for your-active-class will give the color matching section text pink//
 sections.forEach( section => {
    if(section.id == current) {
      section.classList.add("your-active-class");
    } else {
    section.classList.remove("your-active-class");
    }
})

})









//////OLD CODE!!!!!/////



/// FUNCTIONALITY -- SMOOTH SCROLL TO APPROPRIATE SECTION FROM NAV//


// //Store all the anchor links for the nav in a variable
// const navBarLinks = document.querySelectorAll('ul#navbar__list a');

// //Loop through the anchor links, and add an event listener to each one which will run the function when the anchor is clicked
// for (i=0; i < navBarLinks.length; i++) {
//   navBarLinks[i].addEventListener('click', smoothScrollEvent);
// }

// //Use the windows scrollTo method to scroll to the section when anchor link is clicked
// //preventDefault method stops the default action - jumping straight to section.
// function smoothScrollEvent(event) {
//   event.preventDefault();
//   const targetID = event.currentTarget.getAttribute("href");
//   window.scrollTo({
//     top: document.querySelector(targetID).offsetTop,
//     behavior: "smooth"
//   });
// }



/// FUNCTIONALITY - DYNAMICALLY BUILD NAV///

// const sections = document.querySelectorAll('section');
// const titles = document.querySelectorAll('h2.sectionTitle');
// const existingList = document.querySelector('ul#navbar__list');


// // for (i=0; i < sections.length; i++) {
// //   const newLi = document.createElement('li');
// //   newLi.className = sections[i].id;
// //   const newA = document.createElement('a');
// //   newA.href = '#' + sections[i].id;
// //   newA.textContent = sections[i].id;
// //   newLi.appendChild(newA);
// //   existingList.appendChild(newLi);
// // }


/// FUNCTIONALITY - DIFFERENTITATE WHICH SECTION OF THE PAGE IS BEING VIEWED///


// store all the nav li's in a variable
//  const navLi = document.querySelectorAll('#navbar__list li');
//  Caculate the number of Nav LI's (which corresponds to number of sections) - store it in navLength Variable
//  const navLength = navLi.length;


// Add Event Listener
//  window.addEventListener('scroll', ()=> {
//   let current = '';
//   Calculate the distance from the top of the screen for each section and store it in sectionTop variable
//   - this gives the benchmark used to highlight sections
//   sections.forEach( section => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     NEW
//     section.classList.remove("your-active-class");
//    Test which section is closest to top and gets it's id
//     if(pageYOffset >= sectionTop - sectionHeight / navLength) {
//       current = section.getAttribute('id');
//       NEW
//       section.classList.add("your-active-class");
//     }
//   });


//   Remove all active id's
//   Test all li classnames against the one stored in current variable, then add a class of active when a match is found.
//   CSS Styling gives active class red background and white font.
//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });

// })
