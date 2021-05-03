import React from 'react';
import logo from './logo.svg';
import './App.css';
import { uploadActions } from './reducers/uploadFileReducer';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const handleAttachFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('files upload', e.target.files);
		if (e.target.files) dispatch(uploadActions.setUploadFile(e.target.files));
		e.target.value = '';
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<input type="file" multiple onChange={handleAttachFile} />
			</header>
		</div>
	);
}

export default App;
