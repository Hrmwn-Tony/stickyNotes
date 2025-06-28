import { StickyNotes } from './interactivity.js';
import { stickyManager } from './sticky-manager.js';
customElements.define('sticky-note', StickyNotes);


main();

function main(){
    
    const stickyContainer = document.querySelector('.sticky-notes'); //Stikcy Area Div FLEX
    const manager = new stickyManager(stickyContainer);

}
