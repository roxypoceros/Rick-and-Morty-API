import { LitElement, html, css } from 'lit';
import "./main-component"

export class CardComponent extends LitElement {

  static get properties() {
    return {
      idProp: { type: Number },
      nameProp: { type: String },
      imageProp: { type: String },
      statusuProp: { type: String },
      speciesProp: { type: String },
      genderProp: { type: String },
      originProp: { type: String },
    };

  }

  constructor(){
    super();
  }


  static styles = [
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
  ];

  render() {
    return html`
    <h1>Card component</h1>

    <div class="card">
              <h2>Name:${this.idProp }</h2>
              <h2>Name:${this.nameProp }</h2>
                <img src=${this.imageProp } />
                <p>Status:${this.statusuProp }</p>
                <p>Species:${this.speciesProp }</p>
                <p>Gender:${this.genderProp }</p>
                <p>Origin:${this.originProp }</p>
    </div>


    `;
  }
}
customElements.define('card-component', CardComponent);

