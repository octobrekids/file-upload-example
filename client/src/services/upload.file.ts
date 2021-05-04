import { FileProgressType } from '../reducers/uploadFileReducer/type';
import adapter from './adapter.service';

export const uploadFileData = async (
	dataToUpload: FileProgressType[]
): Promise<FileProgressType[]> => {
	const formData = new FormData();
	dataToUpload.forEach((data) => {
		formData.append('files', data.file);
	});

	//TODO: remove owner hardcoded
	formData.append('owner', '1234');

	const response = await adapter.instance.post('/file', formData, {
		headers: { 'content-type': 'multipart/form-data' },
	});
	console.log(response);
	return response.data;
};
