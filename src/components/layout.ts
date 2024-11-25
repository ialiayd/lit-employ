import { msg } from '@lit/localize';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-layout')
export class AppLayout extends LitElement {
	render() {
		return html`<h1>${msg('Employees')}</h1>`;
	}
}
