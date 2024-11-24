import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('add-employee')
export class AddEmployee extends LitElement {
	render() {
		return html`<h1>Add Employee</h1>`;
	}
}
