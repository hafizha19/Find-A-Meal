class makananItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set makanan(makanan) {
        this._makanan = makanan;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {

            display: block;
            margin-bottom: 18px;
            box-shadow: 1px 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .img-makanan {
            display: block;
            margin: auto;
            max-width: 100%;
            height: auto;
        }
        
        .makanan-info {
            padding: 24px;
        }
        
        .makanan-info > h2 {
            font-weight: lighter;
        }
        
        .makanan-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */

        } 
        </style>
        
        <div class="makanan-info">
            <center>
                <h2>${this._makanan.strMeal}</h2>
            </center>
            <br/>
            <img class="img-makanan" src="${this._makanan.strMealThumb}" alt="Gambar Makanan">
            <br/>
            <p> <b> How To Make: </b> ${this._makanan.strInstructions}</p>    
        </div>

        `;
    }
}

customElements.define("makanan-item", makananItem);