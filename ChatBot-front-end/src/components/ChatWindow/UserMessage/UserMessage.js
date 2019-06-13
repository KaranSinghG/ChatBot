import React from 'react';
import './UserMessage.css';

const UserMessage = (props) => {
	return (
		<div>
			<div className='sender-user'>GUEST</div>
			<div className='message-user'>{props.message}</div>			
		</div>
	)
}


export default UserMessage;