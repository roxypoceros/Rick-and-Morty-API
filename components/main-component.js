import { LitElement, html, css } from 'lit';
import "./card-component"

export class MainComponent extends LitElement {

  static get properties() {
    return {
      characters: { type: Object },
    };
  }

  firstUpdated() {
    super.firstUpdated();
    this.characters;
  }

  constructor() {
    super();
    this.characters = [];
    this.getCharacters();
  }

  render() {
    return html`
      <p>Esta es la API de rick and morty</p>
      ${console.log(this.characters, "en render")
      }

    `;
  }

  getCharacters(){
       fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json()) //convertir resultado a JSON
      .then(json => 
        this.characters = json.results) // imprimir resultado en consola
        console.log(this.characters)
      //.catch(err => console.log("Error", err))
  }
}



customElements.define('main-component', MainComponent);
