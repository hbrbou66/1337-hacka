import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();
	const redirectToLogin = () => {
		navigate('/login');
	}
	return (
		<div className='Header'>
			<div className='logo'>
				logo
			</div>
			<div className='pages'>
				<div className='pag1'>page 1</div>
				<div className='pag1'> page 2</div>
				<div className='pag1'>page 3</div>
			</div>
			<div className='Log-in'>
				<button className='log-in-button' onClick={redirectToLogin}
				style={{
					padding: '10px 20px',
					fontSize: '16px',
					cursor: 'pointer',
					backgroundColor: '#4CAF50',
					color: 'white',
					border: 'none',
					borderRadius: '5px',
					transition: 'background-color 0.3s',
				  }}>
					login
				</button>
			</div>
		</div>
	)
}

export default Header
