import { useState } from 'preact/hooks';
// import { signal } from '@preact/signals';

export function Home() {

//const counter = signal(0);	
const [count, setCount] = useState(0);
const increment = () => setCount((count) => count + 1);
const [coffeeCount, setCoffeeCount] = useState(0);
const incrementCoffee = () => setCoffeeCount((coffeeCount) => coffeeCount + 1);
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

// let counter = localStorage.getItem('count');

	return (
		<>
			<div>
				{/* <a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} class="logo" alt="Vite logo" />
				</a>
				<a href="https://preactjs.com" target="_blank">
					<img src={preactLogo} class="logo preact" alt="Preact logo" />
				</a> */}
				{/* insert coffee logo here */}
			</div>
			<h1>Coffee Shops of London</h1>
			<div class="card">
				<div class="btn-toolbar">
					<button onClick={increment}>Number of Coffee shops visited is: {count}
					</button>
					<span class="button-spacing"></span>
					<button onClick={incrementCoffee}>Cups of coffee so far: {coffeeCount}</button>

				</div>
			</div>
			<p class="subtitle">Where all my coffee shop adventures are documented</p>
		</>
	);

}
