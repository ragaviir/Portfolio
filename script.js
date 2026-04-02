function sendMessage(){

alert("Thank you for contacting Ragavi!");

}

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{
card.addEventListener("mouseenter",()=>{
card.style.transform="scale(1.05)";
})

card.addEventListener("mouseleave",()=>{
card.style.transform="scale(1)";
})
})
