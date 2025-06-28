
import { StickyNotes } from './interactivity.js';
export class stickyManager{
    #stickyStorage = [ 
        {id: 1, title: 'Alice', content: 'foo bar'},
        {id: 2, title: 'Bobby', content: 'Lorem Ipsum'},
        {id: 3, title: 'Charlie', content: 'foo bar brown'}];

    #stickyContainer;
    #stickyObject;
    #stickyDataTemplate = {id: null, title: 'Title', content: 'fussar'};


    constructor(container, objSticky){
        this.refreshStickyDisplay();
        this.#stickyContainer = container;
        this.renderStickyDisplay();
        this.#stickyObject = objSticky;
        this.assignButtonInteractivity();
    }

    assignButtonInteractivity(){
        this.#stickyContainer.addEventListener('click', (event) => {
            console.log(event.composedPath()[0].tagName);
            if (event.composedPath()[0].tagName === 'BUTTON'){
                this.buttonInteractivity(event, event.composedPath()[0].className);
            }
        })
    }
    
    buttonInteractivity(event, btnClass){
        console.log(btnClass);
        const stickyIndex = event.target.getStickyIndex();
        switch (btnClass){
            case 'button-add':
                this.addSticky(stickyIndex);
                break;
        
            case 'button-del':
                this.delSticky(stickyIndex);
                break;
        }
    }

    addSticky(stickyIndex){
        this.#stickyStorage.splice((stickyIndex + 1), 0, this.#stickyDataTemplate);
        this.renderStickyDisplay();
    }

    delSticky(stickyIndex){
        this.#stickyStorage.splice(stickyIndex, 1);
        this.renderStickyDisplay();
    }

    refreshStickyDisplay(){
        const stickies = document.querySelectorAll('sticky-note');
        stickies.forEach(sticky =>{
        sticky.remove();
        })
    }
    renderStickyDisplay(){
        this.refreshStickyDisplay();
        for(let [index, num] of this.#stickyStorage.entries()){
            const stickyObject = new StickyNotes(num, index);
            this.#stickyContainer.appendChild(stickyObject);
        }
    }
}