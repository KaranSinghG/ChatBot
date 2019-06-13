import React from 'react';
import cris from './cris.png';
import railways from './railways.png';
import "./Logo.css";

const Logo = () => {
	return (
		<div align="center">
			<div className="cris"> <img alt='logo' src={cris} /> </div>
			<div className="railways"> <img alt='logo' src={railways} /> </div>
		</div>
	)
}

export default Logo;