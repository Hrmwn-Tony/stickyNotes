

export class StickyNotes extends HTMLElement {
    #_shadowRoot;
    #notesContainer;
    #notesHeader;
    #h1Title;
    #notesButtondiv;
    #horizontalLine;
    #notesContent;
    #btnAdd
    #btnDel
    #btnPin
    constructor(){
        super();
        this.#_shadowRoot = this.attachShadow({mode: 'open'});

        this.#notesContainer = this.makeElement("div", 'notes-container')
        this.#notesHeader = this.makeElement("div", 'notes-header');
        this.#h1Title = this.makeElement('h1', 'h1-title');
        this.#notesButtondiv = this.makeElement('div', 'button-div');

        this.#horizontalLine = this.makeElement('hr', 'hr-header');
        this.#notesContent = this.makeElement('p', 'notes-content');

        this.#btnAdd = this.makeElement("button", 'button-add');
        this.#btnDel = this.makeElement("button", 'button-del');
        this.#btnPin = this.makeElement("button", 'button-pin');

        this.assignParentChild(this.#notesContainer, [this.#notesHeader, this.#horizontalLine, this.#notesContent]);
        this.assignParentChild(this.#notesHeader, [this.#h1Title, this.#notesButtondiv]);
        this.assignParentChild(this.#notesButtondiv, [this.#btnAdd,this.#btnDel,this.#btnPin]);

        this.#h1Title.textContent = "Title";
    }

    makeElement(html, className){
        const object = document.createElement(html);
        object.classList.add(className);
        return object;
    }

    assignParentChild(parent, children){
        for (const child of children){
            parent.appendChild(child);
        }

    }

    connectedCallback(){
        this.#_shadowRoot.appendChild(this.#notesContainer);
        const noteStyle = document.createElement('link');
        noteStyle.setAttribute('rel', `stylesheet`);
        noteStyle.setAttribute('href', './sticky-notes-style.css');
        this.#_shadowRoot.appendChild(noteStyle);
    }

    printThisSucka(){
        console.log("your mom is so ugly");
    }
}