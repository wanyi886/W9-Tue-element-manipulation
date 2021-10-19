
const aboutDiv = document.querySelector(".about")


const textArr = ["Birthday: 280 A.D.", "Birthplace: Myra, Turkey", "I have 9 reindeer: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, Blitzen and, of course, Rudolph.", "I love Coca-Cola!"]

textArr.forEach((ele) => {
  let detail = document.createElement("li");
  detail.innerText = ele;
  aboutDiv.appendChild(detail);
})
