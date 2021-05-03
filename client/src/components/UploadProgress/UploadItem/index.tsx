import React from 'react';
import { LeftSide, Percentage, ProgressBar, WrapperItem } from './styled';
import { UploadItemPropsType } from './types';

const UploadItem: React.FC<UploadItemPropsType> = (props) => {
	const { file, progress } = props.file;

	return (
		<WrapperItem>
			<LeftSide>
				<ProgressBar>
					<div style={{ width: `${progress}%` }} />
				</ProgressBar>
				<label>{file.name}</label>
			</LeftSide>
			<Percentage>{progress}</Percentage>
		</WrapperItem>
	);
};

export default UploadItem;
