import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorStateCodeEnum } from '../../types/error';
import { uploadFile } from './action';
import { initUploadState } from './init';
import { FileProgressType, UPLOAD } from './type';

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
	extraReducers: (builder) => {
		builder.addCase(uploadFile.rejected, (state) => {
			state.ready = false;
			state.error = {
				code: ErrorStateCodeEnum.ServerInternalError,
				msg: 'api error',
			};
		});
		builder.addCase(uploadFile.pending, (state) => {
			state.ready = false;
			state.error = undefined;
		});
		builder.addCase(uploadFile.fulfilled, (state, action) => {
			state.ready = true;
			state.error = undefined;
			// TODO: remove hardcoded
			state.owner = '1234';
			state.data.fileProgress = action.payload.data;
		});
	},
});
export default uploadReducer.reducer;
export const uploadActions = uploadReducer.actions;
