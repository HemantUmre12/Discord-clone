import { $, $$ } from "./utiliti.js";

const arrowSign = $$(".arrow-sign");
const plusSign = $$(".plus-sign");

const isdropDownOpen = [false, false, false];

// All elements with class "dropdown-selection"
const dropDownSelection = (par) => {
  return par.querySelectorAll(".dropdown-selection");
}

// Selection heading of channel
const dropDownHeaderText = (par) => {
  return par.querySelector(".dropdown-header-text");
}

// Get index
const getIdx = (icon) => {
  return parseInt(icon.parentElement.dataset.id)
}

// Opening and Closing Dropdown

arrowSign.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const par = arrow.parentElement.parentElement;
    const idx = getIdx(arrow);
    if(isdropDownOpen[idx] == true) {
      closeDropDown(par, arrow);
    }
    else {
      openDropDown(par, arrow);
    }
  })
})

// Open DropDown

const openDropDown = (par, icon) => {
  const selections = dropDownSelection(par);
  const header = dropDownHeaderText(par);
  const idx = getIdx(icon);
  selections.forEach((e) => {
    e.classList.remove("hide");
  });
  header.classList.add("dropdown-header-text-selected");
  icon.classList.add("arrow-sign-click");
  isdropDownOpen[idx] = true;
} 

// Close DropDown

const closeDropDown = (par, icon) => {
  const selections = dropDownSelection(par);
  const header = dropDownHeaderText(par);
  const idx = getIdx(icon);
  selections.forEach((e) => {
    e.classList.add("hide");
  });
  header.classList.remove("dropdown-header-text-selected");
  icon.classList.remove("arrow-sign-click");
  isdropDownOpen[idx] = false;
} 

// Adding new Hashtag/Sub-Channel

const addPointingEvent = () => {
  arrowSign.forEach((e) => {
    e.classList.add("cancel-hover");
  })
  plusSign.forEach((e) => {
    e.classList.add("cancel-hover");
  })
}

const removePointingEvent = () => {
  arrowSign.forEach((e) => {
    e.classList.remove("cancel-hover");
  })
  plusSign.forEach((e) => {
    e.classList.remove("cancel-hover");
  })
}

plusSign.forEach((plus) => {
  plus.addEventListener("click", () => {
    const par = plus.parentElement.parentElement;
    const arrow = plus.parentElement.querySelector(".arrow-sign");
    openDropDown(par, arrow);
    removePointingEvent();
    const addHashtag = par.querySelector(".add-hashtag");
    const input = addHashtag.querySelector(".input-hashtag");
    // Show input
    addHashtag.classList.remove("hide");
    // Focus on input
    input.focus();
    // When press enter
    addHashtag.addEventListener("keypress", (e) => {
      if (e.key == "Enter") {
        extractNewHashtag(input, addHashtag);
        clearInput(input, addHashtag);
        addPointingEvent();
      }
    });
  });
});

// Extract New Hashtag

const extractNewHashtag = (input, addHashtag) => {
  const name = input.value;
  if (name != "") {
    let elem = document.createElement("div");
    elem.innerHTML = `<div class="dropdown-selection">
      <i class="fa-solid fa-hashtag text-gray-400 p-1"></i>
      <h5 class="dropdown-selection-text">${name}</h5>
      </div>`;
    addHashtag.after(elem);
  }
};

// Clear Input and close

const clearInput = (input, addHashtag) => {
  input.value = "";
  addHashtag.classList.add("hide");
};
