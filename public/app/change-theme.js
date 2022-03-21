import { $ } from "./utiliti.js";

const theme = ["", "theme-summer", "theme-winter"];
let idx = 0;
let size = theme.length;

const changeTheme = $(".theme-icon");
const body = $(".body");

changeTheme.addEventListener("click", () => {
    let prevTheme = theme[idx];
    if(idx == size - 1) {
        idx = 0;
    }
    else {
        idx += 1;
    }
    const newTheme = theme[idx];
    if(prevTheme != "") body.classList.remove(prevTheme);
    if(newTheme != "") body.classList.add(newTheme);
})


