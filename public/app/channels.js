// const addNewChannel = document.getElementById("add-new-hashtag");
// const channelContainer = document.querySelector(".question-sub-channel")
// const showInputArea = document.getElementById("new-hashtag");


// console.log(channelContainer);
// console.log(showInputArea);

// addNewChannel.addEventListener("click", () => {
//     showInputArea.classList.add("show-add-hashtag");
//     showInputArea.addEventListener("keypress", (e) => {
//         if(e.key == "Enter") extractNewHashtag();
//     });
// });

// const extractNewHashtag = () => {
//     const name = showInputArea.value;
//     showInputArea.value = "";
//     showInputArea.classList.remove("show-add-hashtag");
//     if(name != "") {
//         let elem = document.createElement("li");
//         elem.innerHTML = name;
//         channelContainer.appendChild(elem);
//     }
// }

import { $, $$ } from "./utiliti.js";

const arrowSign = $$(".arrow-sign");
// console.log(arrowSign);
const plusSign = $$(".plus-sign");
// console.log(plusSign)

arrowSign.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        const par = arrow.parentElement.parentElement;
        const header = par.querySelector(".dropdown-header-text");
        const selections = par.querySelectorAll(".dropdown-selection");
        header.classList.toggle("dropdown-header-text-selected");
        arrow.classList.toggle("arrow-sign-click");
        selections.forEach((e) => {
            e.classList.toggle("dropdown-selection-hide");
        });
    });
});

// const downArrow = document.querySelectorAll()
