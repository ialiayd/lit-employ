import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import EmployeeController from '../../controllers/employee-controller';

@customElement('employees-page')
export class EmployeesPage extends LitElement {
	employeeController = new EmployeeController(this);

	render() {
		return html`<h1>Employees</h1>`;
	}
}
