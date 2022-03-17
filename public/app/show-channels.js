import { $, $$ } from "./utiliti.js";

const arrow = $(".channel-arrow");
const channelBar = $(".channel-bar");
console.log(arrow);
console.log(channelBar);

arrow.addEventListener("click", () => {
    channelBar.classList.toggle("channel-bar-show");
    arrow.classList.toggle("rotate-arrow");
})