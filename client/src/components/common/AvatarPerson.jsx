import { Avatar, Box } from '@mui/material';
import React from 'react';

const AvatarPerson = ({ pic, text }) => {
	return (
		<Box>
			<Avatar alt={text} src={pic} sx={{ width: 150, height: 150 }} />
		</Box>
	);
};

export default AvatarPerson;
