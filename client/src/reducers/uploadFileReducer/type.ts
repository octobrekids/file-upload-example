import { ErrorState } from '../../types/error';

export const UPLOAD = 'UPLOAD';

type FileProgressType = {
	id: number;
	file: File;
	progress: number;
	status: number;
};

type UploadStateType = {
	owner: string;
	uploadUrl: string;
	data: {
		fileProgress: FileProgressType[];
	};
	ready: boolean;
	error?: ErrorState;
};

export type { FileProgressType, UploadStateType };
