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
			Array.from(action.payload).forEach((file, index) =>
				mappedData.push({
					id: index.toString(),
					file: file,
					progress: 0,
					status: 0,
				})
			);
			const appendedData = [...state.data.fileProgress, ...mappedData];
			state.data.fileProgress = appendedData;
		},
		setUploadProgress(
			state,
			action: PayloadAction<{ id: string; progress: number }>
		) {},
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
		});
	},
});
export default uploadReducer.reducer;
export const uploadActions = uploadReducer.actions;
