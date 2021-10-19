
const aboutDiv = document.querySelector(".about")


const textArr = ["Birthday: 280 A.D.", "Birthplace: Myra, Turkey", "I have 9 reindeer: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, Blitzen and, of course, Rudolph.", "I love Coca-Cola!"]

textArr.forEach((ele) => {
  let detail = document.createElement("li");
  detail.className = "detail"
  detail.innerText = ele;
  aboutDiv.appendChild(detail);
})

let now = new Date();
now = now.getTime()
let christmas = new Date("December 25, 2021")
christmas = christmas.getTime();
let result = christmas - now
let daysleft = result/1000/86400
console.log(daysleft)

let days = document.querySelector("#Days")
days.innerHTML = `Days: ${Math.floor(daysleft)}`

let hoursleft = result/1000/3600;
let minutesleft = result/1000/60;

let hours = document.querySelector("#Hours")
hours.innerHTML = `Hours: ${Math.floor(hoursleft)}`

let mins = document.querySelector("#Minutes")
mins.innerHTML = `Minutes: ${Math.floor(minutesleft)}`
