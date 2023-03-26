
// These calls all the classes in our html-document that we need.
const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide ')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length  // Checks how many slides we have. This one calls all the divs in slideRight our html document. So line 8 calls line 4 which calls .right-slide in our html. 

// console.log(slidesLength); Gives us 4 in the console.

let activeSlideIndex =0                                         // The pictures are positioned on top of eachother so we need to know which index is in view.                       

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`          

upButton.addEventListener('click', () => changeSlide('up'))     // When we click the up-button, we run a function that we can name "changeSlide" and we pass in an argument of 'up'.  
downButton.addEventListener('click', () => changeSlide('down')) // When we click the down-buttofn, we run a function that we can name "changeSlide" and we pass in an argument of 'down'.  

const changeSlide = (direction) => {                            // Creating our function that we name "changeSlide", it takes in direction as a parameter. 
    const sliderHeight = sliderContainer.clientHeight           // Creating "sliderHeight" and set it to be sliderContainer and add the property clientHeight. As I understand it, this adapts the picture height to the current vieport in our browser??? console.log(sliderHeight)  Gives us the current height in pixels in the console.
    if(direction === 'up') {                                    // Checking for the direction that is passed in. If direction equals to 'up'...
        activeSlideIndex++                                      // then take "activeSlideIndex" and increment it by 1.
        if(activeSlideIndex > slidesLength -1) {                // and when we hit the end i.e if "activeSlideIndex" is greater than the last index in the slide. First picture has the index of 0, and if the active index is greater than -1...
            activeSlideIndex = 0                                // then we reset the slide to 0, i.e the beginning.                            
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength -1
        }
    } 

/* This code allows the photos to actually slide up or down.
   As I understand it, the .style property returns the inline style of the HTML element in question, i.e "background-image". 
   The .transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model, https://developer.mozilla.org/en-US/docs/Web/CSS/transform.   
    */
slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`  // Using a Template String to translate the picture in our "slideRight" upwards, hence the minus-sign before the $. We calculate how much it should slide by multiplying "activeSlideIndex" by "sliderHeight" and output it in amount of pixels.
slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`    // Using a Template String to translate the picture in our "slideRight" downwards.
}