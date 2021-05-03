import { ErrorState } from '../../types/error';

export const UPLOAD = 'UPLOAD';

type FileProgressType = {
	_id: string;
	file: File;
	progress: number;
	status: 0;
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

export type { UploadStateType };
