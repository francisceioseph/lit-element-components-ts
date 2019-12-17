import { LitElement, html, property, customElement } from "lit-element";
import styles from './styles';

@customElement("app-link")
class AppLink extends LitElement {
  @property()
  private href = "#";

  @property()
  private target = "";

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <a href="${this.href}" target="${this.target}">
        <slot></slot>
      </a>
    `;
  }
}
