import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
// import Appv1 from './Appv1';
import App from './App.jsx';
// import './index.css'

function Test() {
	const [movieRating, setMovieRating] = useState(0);
	return (
		<div>
			<StarRating
				color='blue'
				maxRating={10}
				onSetRating={setMovieRating}
			/>
			<p>This movie was reated </p>

			<ParentComponent />
		</div>
	);
}

// Child component that receives props
const ChildComponent = ({ message }) => {
	return <p>{message}</p>;
};

// Parent component
const ParentComponent = () => {
	const [count, setCount] = useState(0);

	// Function to update count
	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			{/* Render ChildComponent with count as a prop */}
			<ChildComponent message={`Count: ${count}`} />
			{/* Button to increment count */}
			<button onClick={incrementCount}>Increment Count</button>
		</div>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		{/* <StarRating
			maxRating={5}
			messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amzaing']}
		/>
		<StarRating
			size={24}
			color='red'
			className='test'
			defaultRating={3}
		/> */}
		{/* <Test /> */}
	</React.StrictMode>
);
