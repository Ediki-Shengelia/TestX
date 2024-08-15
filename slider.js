"use strict";

export function slider() {
  let dataSlider = [
    {
      id: 1,
      imgUrl: "./carImg/audi-1.png",
      title: "Audi",
      price: "50 000 $",
    },
    {
      id: 2,
      imgUrl: "./carImg/bmw-1.png",
      title: "BMW",
      price: "70 000$",
    },
    {
      id: 3,
      imgUrl: "./carImg/ferrari-1.png",
      title: "Ferrari",
      price: "2 500 000$",
    },
    {
      id: 4,
      imgUrl: "./carImg/lamborgini-2.png",
      title: "Lamborgini",
      price: "200 000$",
    },
    {
      id: 5,
      imgUrl: "./carImg/mersedes-1.png",
      title: "Mersedes",
      price: "120 000$",
    },
    {
      id: 6,
      imgUrl: "./carImg/mersedes-2.png",
      title: "Mersedes",
      price: "140 000$",
    },
    {
      id: 7,
      imgUrl: "./carImg/porsch911.png",
      title: "porsche 911",
      price: "130 000$",
    },
    {
      id: 8,
      imgUrl: "./carImg/porsche.png",
      title: "porsche",
      price: "130 000$",
    },
  ];
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  const sliderContent = document.getElementById("slider-content");
  let slider = 0;

  function createDivTag() {
    let divEl = document.createElement("div");
    return divEl;
  }
  function createImgTag(item) {
    let imageEl = document.createElement("div");
    imageEl.setAttribute("style", `background-image: url(${item.imgUrl});`);
    imageEl.classList.add("image-el");
    return imageEl;
  }

  function createTitleTag(index) {
    const h2El = document.createElement("h2");
    h2El.classList.add("title-h2");
    h2El.innerText = index.title;
    return h2El;
  }
  function createPriceTag(item) {
    const h3EL = document.createElement("h3");
    h3EL.classList.add("price-h3");
    h3EL.textContent = item.price;
    return h3EL;
  }

  function SetSlide() {
    const Div = createDivTag();
    const image = createImgTag(dataSlider[slider]);
    const title = createTitleTag(dataSlider[slider]);
    const price = createPriceTag(dataSlider[slider]);
    const Dotebi = createDots();

    Div.appendChild(image);
    Div.appendChild(title);
    Div.appendChild(price);
    Div.appendChild(Dotebi);
    sliderContent.innerHTML = "";
    sliderContent.appendChild(Div);
  }
  SetSlide();
  function clickArrowLeft() {
    if (slider === 0) {
      slider = dataSlider.length - 1;
      SetSlide();
      return;
    }
    slider--;
    SetSlide();
  }
  function clickArrowRight() {
    if (slider === dataSlider.length - 1) {
      slider = 0;
      SetSlide();
      return;
    }
    slider++;
    SetSlide();
  }
  arrowLeft.addEventListener("click", clickArrowLeft);
  arrowRight.addEventListener("click", clickArrowRight);

  setInterval(clickArrowRight, 3000);

  function createDots() {
    const dotsparent = document.createElement("div");
    dotsparent.classList.add("dotParent");
    dataSlider.forEach((element) => {
      const dotChild = document.createElement("div");
      dotChild.classList.add("dotChild");
      dotChild.setAttribute("dotID", element.id - 1);
      dotsparent.appendChild(dotChild);
      dotChild.addEventListener("click", function () {
        let IdDots = this.getAttribute("dotID");
        slider = IdDots;
        SetSlide();
      });
    });
    return dotsparent;
  }
}
