import { ReactiveController, ReactiveControllerHost } from 'lit';
import { EmployeeService } from '../services/employee-service';
import { EmployeeType } from '../types/types';

class EmployeeController implements ReactiveController {
	private host: ReactiveControllerHost;

	private employeeService = new EmployeeService();

	state: {
		data: EmployeeType[];
		currentPage: number;
		total: number;
		totalPages: number;
	};

	constructor(host: ReactiveControllerHost) {
		this.host = host;
		this.state = {
			data: [],
			currentPage: 1,
			total: 0,
			totalPages: 0,
		};
		host.addController(this);
	}

	private currentPage = 1;
	private pageSize = 10;

	async hostConnected() {
		await this.loadEmployees();
	}

	async loadEmployees() {
		const response = await this.employeeService.getEmployees(
			this.currentPage,
			this.pageSize
		);
		this.state.data = response.data;
		this.state.total = response.total;
		this.state.totalPages = response.totalPages;
		this.host.requestUpdate();
	}

	async addEmployee(employee: EmployeeType) {
		await this.employeeService.addEmployee(employee);
		await this.loadEmployees();
	}

	async updateEmployee(employee: EmployeeType) {
		await this.employeeService.updateEmployee(employee);
		await this.loadEmployees();
	}

	async deleteEmployee(uuid: string) {
		await this.employeeService.deleteEmployee(uuid);
		await this.loadEmployees();
	}

	async setPage(page: number) {
		this.currentPage = page;
		await this.loadEmployees();
	}
}

export default EmployeeController;
