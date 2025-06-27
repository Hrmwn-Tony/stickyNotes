import { StickyNotes } from './interactivity.js';
customElements.define('sticky-note', StickyNotes);


main();

function main(){
    assignEventListener();

}

function assignEventListener(){
    //Adding listener to stickies container
    const stickyArea = document.querySelector('.sticky-notes');
    stickyArea.addEventListener('click', e =>{
    if(e.composedPath()[0].tagName === 'BUTTON'){
        e.target.printThisSucka();
    }
   })
}