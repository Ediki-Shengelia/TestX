export function accordion() {
  let divArray = document.querySelectorAll(".AccordionBlock");
  divArray.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("Accordion");
    });
  });
}
