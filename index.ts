import { html } from 'lit-element';
import { render } from 'lit-html';

import './style.css';
import './atoms';

const App = () => html`
  <div>
    <app-link href="http://youtube.com/" target="_">
      Youtube
    </app-link>
  </div>
`;

render(App(), document.body);

