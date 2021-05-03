import { UploadStateType } from './type';

export const initUploadState: UploadStateType = {
	owner: '',
	uploadUrl: '',
	data: {
		fileProgress: [],
	},
	ready: false,
};
