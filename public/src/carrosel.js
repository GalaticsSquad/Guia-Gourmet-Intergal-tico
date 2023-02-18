export default function carrosel() {
    console.log('carrosel')
    const items = document.querySelectorAll(".item");
    const button = document.querySelectorAll(".buttonCarrossel");
    const slides = document.querySelectorAll(".slide");
  
    console.log("items length:", items.length);
    console.log(slides.length);
  
    let current = 0;
    let prev = items.length - 1;
    let next = 1;
  
    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", () =>
        i == 0 ? gotoPrev() : gotoNext()
      );
    }
  
    const gotoPrev = () =>
      current > 0 ? gotoNum(current - 1) : gotoNum(items.length - 1);
  
    const gotoNext = () =>
      current < items.length - 1 ? gotoNum(current + 1) : gotoNum(0);
  
    const gotoNum = (number) => {
      current = number;
      prev = current - 1;
      next = current + 1;
  
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
        items[i].classList.remove("prev");
        items[i].classList.remove("next");
      }
  
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
      }
  
      if (next == items.length) {
        next = 0;
      }
  
      if (prev == -1) {
        prev = items.length - 1;
      }
  
      items[current].classList.add("active");
      items[prev].classList.add("prev");
      items[next].classList.add("next");
  
      slides[current].classList.add("active");
      slides[prev].classList.add("prev");
      slides[next].classList.add("next");
    };
  }