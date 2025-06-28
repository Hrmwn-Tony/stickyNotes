import { StickyNotes } from './interactivity.js';
import * as stickyManager from './sticky-manager.js';
customElements.define('sticky-note', StickyNotes);


main();

function main(){
    const stickyArea = document.querySelector('.sticky-notes'); //Stikcy Area Div FLEX
    const numberSticky = [
        {id: 1, title: 'Alice', content: 'foo bar'},
        {id: 2, title: 'Bobby', content: 'Lorem Ipsum'},
        {id: 3, title: 'Charlie', content: 'foo bar brown'}]; 

    renderSticky(stickyArea, numberSticky);
    assignEventListener(stickyArea, numberSticky);

}

function assignEventListener(stickyArea, numberSticky){
    //Adding listener to stickies container
    stickyArea.addEventListener('click', e =>{
        console.log(numberSticky);
        numberSticky = stickyManager.removeSticky(e, numberSticky);
        renderSticky(stickyArea, numberSticky);
        
    })
   //Add more if needed
}

function renderSticky(stickyArea, numberSticky){
        refreshDisplay();
        for (let [index, num] of numberSticky.entries()){
        const stickyObject = new StickyNotes(num, index);
        stickyArea.appendChild(stickyObject);
    }
}

function refreshDisplay( ){
    const stickies = document.querySelectorAll('sticky-note');
    stickies.forEach(sticky =>{
        sticky.remove();
    })

}
