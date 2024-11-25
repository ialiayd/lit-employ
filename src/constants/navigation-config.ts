import { msg } from '@lit/localize';
import { PATHS } from './paths';

const navigationConfig = [
	{
		label: msg('Employees'),
		icon: 'group',
		path: PATHS.BASE,
	},
	{ label: msg('Add Employee'), icon: 'add', path: PATHS.ADD_EMPLOYEE },
];

export default navigationConfig;
