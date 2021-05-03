import { FileProgressType } from '../reducers/uploadFileReducer/type';

const modifyFiles = (
	existingFile: FileProgressType[],
	files: File[]
): FileProgressType[] => {
	let fileToUpload: FileProgressType[] = [];

	for (let i = 0; i < files.length; i++) {
		const _id = existingFile.length + i + 1;
		fileToUpload = [
			...fileToUpload,
			{
				_id: _id.toString(),
				file: files[i],
				progress: 0,
				status: 0,
			},
		];
	}
	return fileToUpload;
};

export default modifyFiles;
