import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import navigationConfig from '../constants/navigation-config';

import logo from '../assets/images/logo.png';

@customElement('navigation-bar')
export class NavigationBar extends LitElement {
	render() {
		return html`<header>
			<nav>
				<div class="logo-container">
					<a href="/">
						<img src=${logo} alt="logo" />
					</a>
				</div>
				<div class="nav-links">
					${navigationConfig.map(
						(navItem) =>
							html`<a href="${navItem.path}" class="nav-link">
								<span class="nav-link-text">${navItem.label}</span>
							</a>`
					)}
				</div>
			</nav>
		</header>`;
	}

	static styles = css`
		header {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		nav {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.logo-container {
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				height: 3rem;
			}
		}

		.nav-links {
			display: flex;
			gap: 1rem;
		}

		.nav-link {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			text-decoration: none;
			color: var(--color-primary-500);

			span {
				display: flex;
				align-items: center;
			}
		}

		.nav-link-text {
			font-size: 1rem;
			color: inherit;
			text-decoration: inherit;
			transition: all 0.3s;
			border-bottom: 1px solid transparent;

			&:hover,
			&:focus,
			&:active {
				border-bottom: 1px solid var(--color-primary-400);
				color: var(--color-primary-400);
			}
		}
	`;
}
