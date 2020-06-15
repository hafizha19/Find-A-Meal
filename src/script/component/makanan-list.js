import "./makanan-item.js";

class makananList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set makanans(makanans) {
        this._makanans = makanans;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._makanans.forEach(makanan => {
            const makananItemElement = document.createElement("makanan-item");
            makananItemElement.makanan = makanan;
            this.shadowDOM.appendChild(makananItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
        }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("makanan-list", makananList);