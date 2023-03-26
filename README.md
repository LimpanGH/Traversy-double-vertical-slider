# Traversy-double-vertical-slider

Text sliding and image sliding, click two arrows to slide.
Not adjusting to smaller screen, but still nice and functioning.

https://www.youtube.com/watch?v=JkeyKeK3V24 Timestamp 15:31

https://github.com/bradtraversy/50projects50days/tree/master/double-vertical-slider 



Questions: ____________________________________________________________

CSS - - - - - - -

* .css line 22.  Why do we set "overflow: hidden;", theres not really an abundance of text. 
  Svar: annars kan det knasa om vieport är mindre, tex på en telefon.

* .css, vi definierar  font-size för h1 (line 46), men inte för p, varför? P har förmodligen en standardstorlek som vi inte      ändrar i detta projekt. 

* Read up on css position!

* Varför behöver vi sätta button:focus till outline:none när vi redan gjort det i button? Jag märker ingen skillnad om jag tar bort det.
  button {
    border: none;                               
}

button:focus {
    outline: none;
}


Java Script - - - - - - - -

* .js line 14: Fattar inte vad raden innebär, förutom att den medverkar till att se till att rätt bild hör till rätt text.
  slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

* .js line 19: Should'nt this affect all slides from 0-3??
  const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength -1) {
            activeSlideIndex = 0

* .js line 37: I don't understand how "slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`" is connecting to ".clientHeight" on line 20. Timestamp 38:30



Fortsätt genomgång med fred i css line 36.