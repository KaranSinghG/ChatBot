import React,{Component} from 'react';
import './ChatWindow.css';
import UserMessage from './UserMessage/UserMessage.js';


class ChatWindow extends Component{
	render() {
		return(
			<div className='shadow-5 ChatWindow'>
				{
					this.props.message.map((message,index)=> {
						return(
							<UserMessage key={index} message={message}/>
						)
					})
				}
			</div>
		)
	}
}

export default ChatWindow;