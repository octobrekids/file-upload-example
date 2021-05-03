import React from 'react';
import { Wrapper } from './styled';
import { UploadProgressPropsType } from './types';
import UploadItem from './UploadItem';

const UploadProgress: React.FC<UploadProgressPropsType> = (props) => {
	const { fileProgress } = props;
	const nOfUploadFile = fileProgress.length;

	return nOfUploadFile > 0 ? (
		<Wrapper>
			<h4>Uploading File</h4>
			{nOfUploadFile
				? fileProgress.map((file) => (
						<UploadItem key={Math.random()} file={file} />
				  ))
				: null}
		</Wrapper>
	) : null;
};

export default UploadProgress;
