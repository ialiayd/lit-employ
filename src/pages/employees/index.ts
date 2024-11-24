import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('employees-page')
export class EmployeesPage extends LitElement {
	render() {
		return html`<h1>Employees</h1>`;
	}
}
