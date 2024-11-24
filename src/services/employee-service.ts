import { DEPARTMENTS, EmployeeType, POSITIONS } from '../types/types';

const employees: EmployeeType[] = Array.from({ length: 100 }, (_, index) => ({
	uuid: crypto.randomUUID(),
	firstName: `FirstName${index + 1}`,
	lastName: `LastName${index + 1}`,
	dateOfBirth: new Date(
		1970 + Math.floor(Math.random() * 30),
		Math.floor(Math.random() * 12),
		Math.floor(Math.random() * 28) + 1
	)
		.toISOString()
		.split('T')[0],
	dateOfEmployment: new Date(
		2015 + Math.floor(Math.random() * 9),
		Math.floor(Math.random() * 12),
		Math.floor(Math.random() * 28) + 1
	)
		.toISOString()
		.split('T')[0],
	phoneNumber: `+1${Math.floor(Math.random() * 1000000000)
		.toString()
		.padStart(9, '0')}`,
	email: `employee${index + 1}@company.com`,
	department: DEPARTMENTS[Math.floor(Math.random() * 2)],
	position: POSITIONS[Math.floor(Math.random() * 3)],
}));

export class EmployeeService {
	async getEmployees(
		page: number = 1,
		pageSize: number = 10
	): Promise<{
		data: EmployeeType[];
		total: number;
		currentPage: number;
		totalPages: number;
	}> {
		const start = (page - 1) * pageSize;
		const end = start + pageSize;
		const paginatedEmployees = employees.slice(start, end);

		return {
			data: paginatedEmployees,
			total: employees.length,
			currentPage: page,
			totalPages: Math.ceil(employees.length / pageSize),
		};
	}

	async addEmployee(employee: EmployeeType): Promise<EmployeeType> {
		employee.uuid = crypto.randomUUID();
		employees.push(employee);
		return employee;
	}

	async updateEmployee(employee: EmployeeType): Promise<EmployeeType> {
		const index = employees.findIndex((e) => e.uuid === employee.uuid);
		employees[index] = employee;
		return employee;
	}

	async deleteEmployee(uuid: string): Promise<void> {
		const index = employees.findIndex((e) => e.uuid === uuid);
		employees.splice(index, 1);
	}
}
