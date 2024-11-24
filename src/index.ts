import { Route, Router } from '@vaadin/router';
import { PATHS } from './constants/paths';
import './pages/add-employee';
import './pages/employees';

const routes: Route[] = [
	{
		path: PATHS.BASE,
		component: 'employees-page',
	},
	{
		path: PATHS.ADD_EMPLOYEE,
		component: 'add-employee',
	},
];

const router = new Router(document.getElementById('outlet'));
router.setRoutes(routes);
