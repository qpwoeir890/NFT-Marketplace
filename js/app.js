let header = document.querySelector(".header");
let toggleBtn = document.querySelector(".header__btn-homburger");
let headerList = document.querySelector(".header__list");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});

toggleBtn.addEventListener("click",()=>{
  headerList.classList.toggle("header__list-show");
})

// setInterval(() => {
//   const time = document.querySelector(".display #time");
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let day_night = "AM";
//   if (hours > 12) {
//     day_night = "PM";
//     hours = hours - 12;
//   }
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//   if (hours < 10) {
//     hours = "0" + hours;
//   }
//   time.textContent = hours + ":" + minutes + ":" + seconds 
// })

let hrs = document.getElementById("hrs");
let minut = document.getElementById("minut");
let second = document.getElementById("second");
setInterval(()=>{
  let currenTime = new Date();
hrs.innerHTML = currenTime.getHours();
minut.innerHTML = currenTime.getMinutes();
second.innerHTML = currenTime.getSeconds();
},1000)