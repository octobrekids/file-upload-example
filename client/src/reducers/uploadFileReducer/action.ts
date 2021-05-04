import { createAsyncThunk } from '@reduxjs/toolkit';
import { uploadFileData } from '../../services/upload.file';
import { FileProgressType, UPLOAD } from './type';

export const uploadFile = createAsyncThunk(
	UPLOAD,
	// TODO: use ThunkAPI to calculate upload progress
	async (dataToUpload: FileProgressType[]) => {
		return { data: await uploadFileData(dataToUpload) };
	}
);
