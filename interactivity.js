

export class StickyNotes extends HTMLElement {
    #_shadowRoot;
    #notesContainer;
    #notesHeader;
    #h1Title;
    #notesButtondiv;
    #horizontalLine;
    #notesContent;
    constructor(){
        super();
        this.#_shadowRoot = this.attachShadow({mode: 'open'});

        this.#notesContainer = this.makeElement("div", 'notes-container')
        this.#notesHeader = this.makeElement("div", 'notes-header');
        this.#h1Title = this.makeElement('h1', 'h1-title');
        this.#notesButtondiv = this.makeElement('div', 'button-div');

        this.#horizontalLine = this.makeElement('hr', 'hr-header');
        this.#notesContent = this.makeElement('p', 'notes-content');

        this.assignParentChild(this.#notesContainer, [this.#notesHeader, this.#notesContent]);
        this.assignParentChild(this.#notesHeader, [this.#h1Title, this.#notesButtondiv, this.#horizontalLine]);
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
        this.shadowRoot.appendChild(this.#notesContainer);
        const noteStyle = document.createElement('link');
        noteStyle.setAttribute('rel', `stylesheet`);
        noteStyle.setAttribute('href', './sticky-notes-styles.css');
    }
}