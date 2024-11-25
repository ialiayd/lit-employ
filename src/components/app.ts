import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './navigation';

@customElement('app-root')
export class AppRoot extends LitElement {
	render() {
		return html`<navigation-bar></navigation-bar>
			<main>
				<slot></slot>
			</main>`;
	}

	static styles = css`
		:host {
			width: 100%;
			background-color: var(--color-white);
			border-radius: 0.5rem;
			padding: 2rem;
		}
	`;
}
