import { LitElement, html, css } from "lit";
import "./card-component";

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

  /* static styles = [
    css`
      :host {
        display: block;
        --LightGreen: #e6ffe6;
        --DarkGreen: #006666;
      }

      .card {
        background-color: var(--LightGreen);
        color: var(--DarkGreen);
        margin: 16px;
        padding: 16px;
        max-width: 500px;
        border-radius: 25px;
        text-align: center;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
          0 3px 10px 0 rgba(0, 0, 0, 0.19);
      }
      img {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
          0 3px 10px 0 rgba(0, 0, 0, 0.19);
      }
    `,
  ]; */

  render() {
    return html`
      <div>
        ${this.characters.map(e => html`
        <card-component
                idProp=${e.id}
                nameProp=${e.name}
                imageProp= ${e.image}
                statusuProp= ${e.status}
                speciesProp= ${e.species}
                genderProp=${e.gender}
                originProp= ${e.origin.name}
                ></card-component>

            </div>
          `
        )}
      </div>
    `;
  }

  getCharacters() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json()) //convertir resultado a JSON
      .then((json) => (this.characters = json.results)); // imprimir resultado en consola
    console.log(this.characters.results);
    //.catch(err => console.log("Error", err));
  }
}

customElements.define("main-component", MainComponent);
