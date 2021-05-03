import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initUploadState } from './init';
import { FileProgressType, UPLOAD } from './type';

interface UploadProgress {
	id: string;
	progress: number;
}

export const uploadReducer = createSlice({
	name: UPLOAD,
	initialState: initUploadState,
	reducers: {
		init(state) {
			return { ...state, ...initUploadState };
		},
		setUploadFile(state, action: PayloadAction<FileList>) {
			const mappedData: FileProgressType[] = [];
			Array.from(action.payload).forEach((file) =>
				mappedData.push({
					file: file,
					progress: 0,
					status: 0,
				})
			);
			const appendedData = [...state.data.fileProgress, ...mappedData];
			state.data.fileProgress = appendedData;
		},
	},
});
export default uploadReducer.reducer;
export const uploadActions = uploadReducer.actions;
