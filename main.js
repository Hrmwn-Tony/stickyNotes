import { addNewNotes } from "./interactivity.js";

const button = document.querySelector(".sticky-notes");
button.addEventListener("click", function(event){
    addNewNotes(event);
})