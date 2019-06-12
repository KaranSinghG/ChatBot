import React,{Component} from 'react';
import './ChatWindow.css';

class ChatWindow extends Component{
	render() {
		return(
			<div className='shadow-5 ChatWindow'>
				
				<div className='sender-bot'>BOT</div>
				<div className='message-bot'>Hello Sir.<br />How may I help you?</div>

				<div className='sender-user'>GUEST</div>
				<div className='message-user'>What is the date Today?</div>
				
				<div className='sender-bot'>BOT</div>
				<div className='message-bot'>Today is 11 June, 2019.</div>

			</div>
		)
	}
}

export default ChatWindow;