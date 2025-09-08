let main = document.getElementById("main-container");
let home = document.getElementById("Home");
let Education = document.getElementById("Education");
let Project = document.getElementById("projects");



const dataFetcher = async (path) => {
  const res = await fetch(path);
  const data = await res.text();
  return data;
};

window.addEventListener("load", async () => {
  // console.log(dataFetcher("./Home.html"));
  main.innerHTML = await dataFetcher("Home.html");
});


home.addEventListener("click", async () => {
  main.innerHTML = await dataFetcher("Home.html");
});


Education.addEventListener("click", async () => {
  main.innerHTML = await dataFetcher("Education.html");
    // scrol effect
  const left_btn = document.getElementById("left-btn");
  const right_btn = document.getElementById("right-btn");
  const track = document.querySelector(".item-track");
  const items = document.querySelectorAll(".item");

  console.log("items length:", items.length, "track:", !!track);

  let index = 0;
  const sliderUpdater = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  right_btn.addEventListener("click", () => {
   console.log('hi')
    if (index < items.length - 1) {
      index++;
      sliderUpdater();
    }
  });
  left_btn.addEventListener("click", () => {
   
    if (index > 0) {
      index--;
      sliderUpdater();
    }
  });
});



Project.addEventListener("click", async () => {
  // console.log(dataFetcher("./Project.html"));
  main.innerHTML = await dataFetcher("Projects.html");
});
