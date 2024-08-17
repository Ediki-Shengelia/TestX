export function filterOfCars() {
  let userFilter = document.getElementById("filterInput");
  let list = document.getElementById("list");
  let array = [];

  //
  function fetchWithXMLHttpRequest(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(`HTTP error! Status: ${xhr.status}`));
        }
      };

      xhr.onerror = () => reject(new Error("Network error"));

      xhr.send();
    });
  }

  async function fetchData() {
    try {
      // Use await to wait for the Promise returned by fetchWithXMLHttpRequest
      const responseText = await fetchWithXMLHttpRequest(
        "https://ediki-shengelia.github.io/test333/server.json"
      );
      // Parse the JSON from the response
      const data = JSON.parse(responseText);
      const JSdata = data.data;

      let fragment = document.createDocumentFragment();
      for (let index of JSdata) {
        let liEl = document.createElement("li");
        liEl.classList.add("StyleLi");
        let imgEl = document.createElement("img");
        imgEl.classList.add("imageStyle");
        imgEl.src = index.imgUrl;

        let title = document.createElement("h2");
        title.classList.add("titleH2");
        title.innerText = index.title;

        let Year = document.createElement("h3");
        Year.classList.add("someH");
        Year.textContent = `Year: ${index.Year}`;

        let price = document.createElement("h4");
        price.classList.add("someH");
        price.innerText = `Price: ${index.price}`;

        let Location = document.createElement("h5");
        Location.classList.add("someH");
        Location.innerText = `Location: ${index.Location}`;

        fragment.appendChild(imgEl);
        fragment.appendChild(Year);
        fragment.appendChild(price);
        fragment.appendChild(Location);
        liEl.appendChild(title);
        liEl.appendChild(fragment);
        array.push(liEl);

        list.appendChild(liEl);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  fetchData();

  function Filter(item) {
    for (let index of array) {
      if (index.innerText.toLowerCase().includes(item.toLowerCase())) {
        index.classList.remove("active");
      } else {
        index.classList.add("active");
      }
    }
  }
  userFilter.addEventListener("keyup", function () {
    Filter(this.value);
  });
}
