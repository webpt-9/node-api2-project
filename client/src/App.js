import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PostList from './components/PostList.js';

function App() {
	const [ data, setData ] = useState([]);
	const url = 'http://localhost:4000/api/posts';

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				console.log('TCL: App -> res.data', res.data);
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="App">
			<PostList data={data} />
		</div>
	);
}

export default App;
