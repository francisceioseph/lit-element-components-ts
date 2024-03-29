import { css } from "lit-element";

export default css`
  a {
    font-family: var(--font-family, sans-serif);
    font-weight: var(--font-weight-medium, bold);
    color: var(--color-primary-dawn, blue);
    line-height: var(--font-line-height-paragraph2, 18px);
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 2px var(--border-style-link, solid);
  }
`;
