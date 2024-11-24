export const DEPARTMENTS = ['analytics', 'tech'] as const;
export const POSITIONS = ['junior', 'medior', 'senior'] as const;

export type EmployeeType = {
	uuid?: string;
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	dateOfEmployment: string;
	phoneNumber: string;
	email: string;
	department: (typeof DEPARTMENTS)[number];
	position: (typeof POSITIONS)[number];
};
