import { useState } from 'react';

export const Post = (props) => {
	const [counter, setCounter] = useState(0);

	const handlePlusClick = () => {
		setCounter(counter + 1);
	}
	
	return(<div style={{'backgroundColor':'#F0F2F5', 'borderRadius':'5px', 'paddingBottom':'10px'}}>
			<h1>{props.data.id}</h1>
			<h2>{props.data.title}</h2>
			<h3>{props.data.body}</h3>
			<button onClick={handlePlusClick}>like</button> {counter}
		</div>
	)
} 