import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo.js';
import ChatWindow from './components/ChatWindow/ChatWindow.js';
import MessageBox from './components/MessageBox/MessageBox.js';
import './App.css';

const particlesOptions = {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 900
          }
        }
      }
    }

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      message:[]
    }
  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }

  onButtonSubmit=()=>{
    this.setState({message: [...this.state.message,this.state.input]});
    this.setState({input: ''});
  }

  render() {
  return (
    <div className="App">
      <Particles 
        className='particles'
        params={particlesOptions}
      />
      <Logo />
      <ChatWindow message={this.state.message}/>
      <MessageBox 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit} />
    </div>
  );
}}

export default App;
