import { LitElement, html, css } from "lit";

export class CardComponent extends LitElement {
  static get properties() {
    return {
      characters: { type: Object },
    };
  }

  constructor() {
    super();
    this.characters = [];
    //this.getCharacters();
  }

  /*   static styles = [
    css`
      :host {
        display: block;
      }
    `
  ]; */

  render() {
    return html`
      <p>Esta es la API de rick and morty</p>
      f

    `;
  }

  getCharacters(){
       fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json()) //convertir resultado a JSON
      .then(json => 
        this.characters = json) // imprimir resultado en consola
        console.log(this.characters)
      .catch(err => console.log("Error", err))
  }
}
customElements.define("card-component", CardComponent);
