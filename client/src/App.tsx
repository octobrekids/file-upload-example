import React from 'react';
import logo from './logo.svg';
import './App.css';
import { uploadActions } from './reducers/uploadFileReducer';
import { useDispatch, useSelector } from 'react-redux';
import UploadProgress from './components/UploadProgress';
import { StoresState } from './store';

function App() {
	const dispatch = useDispatch();
	const UploadFile = useSelector(
		(state: StoresState) => state.upload.data.fileProgress
	);
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
			<UploadProgress fileProgress={UploadFile} />
		</div>
	);
}

export default App;
