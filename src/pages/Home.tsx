import { useState } from 'preact/hooks';

import { signal } from '@preact/signals';
// run npm when installing new packages!! Had error saying it couldn't find signals... and install the right package! signals not signals-reac

import style from './style.css';

const counter = signal(0);
const coffeeCounter = signal(0);	
export function Home() {

console.log(counter);
console.log(coffeeCounter);

var opacity = 0;
// set opacity to 0 on loading

document.addEventListener("DOMContentLoaded", () => {
let element = document.querySelector("body");
let fadeIn = setInterval(() => {

	if (opacity >= 1) {
		clearInterval(fadeIn);
	}
element.style.opacity = opacity.toString();
// needed toString to satisfy TypeScript's type checking
opacity += 0.01;
}, 10);
});

// YO THIS WORKS!! BUT needed to use an eventListener in JS to make this work.
// needs to be refactored for lifecycle hooks in Preac


	return (
		<>
			{/* <div> */}
				{/* <a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} class="logo" alt="Vite logo" />
				</a>
				<a href="https://preactjs.com" target="_blank">
					<img src={preactLogo} class="logo preact" alt="Preact logo" />
				</a> */}
				{/* insert coffee logo here */}
			{/* </div> */}
			<div class="outer-card align-items-start">
				<h1>Coffee Shops of London</h1>
				<div class="card">
					<div class="btn-toolbar">
						<button onClick={() => counter.value++}>Number of Coffee shops visited is: {counter}
						</button>
						<span class="button-spacing"></span>
						<button onClick={() => coffeeCounter.value++}>Cups of coffee so far: {coffeeCounter}</button>

					</div>
				</div>
				<p class="subtitle">Where all my coffee shop adventures are documented</p>
			</div>
		</>
	);

}
