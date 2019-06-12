import React from 'react';
import './MessageBox.css';

const MessageBox = () => {
	return(
		<div className='center'>
			<div className='box center pa2 br3 shadow-5'>
				<input className='f4 w-70 center' type='tex' />
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-dark-blue'>Send</button>
			</div>
		</div>
	);
}

export default MessageBox;