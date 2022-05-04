import { useState } from 'react';

export const Counter = () => {
	const [counter, setCounter] = useState(0);

	const handlePlusClick = () => {
		setCounter(counter + 1);
	}

	const handleMinusClick = () => {
		setCounter(counter - 1);
	}

	return <div> 
			<h1>{counter}</h1>
			<button onClick={handlePlusClick}> +</button>
			<button onClick={handleMinusClick}>-</button> 
		</div>
}