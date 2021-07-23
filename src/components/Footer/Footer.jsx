import React from 'react'
import useStyles from'./styles';
import {Icon} from '@material-ui/core';

const Footer = () => {
	const classes = useStyles();
	return (
		<div className = {classes.bigFooter}>
			
			<div className = {classes.footer}>
					<h1><a className = {classes.anchor} href = "/">Nature Cosmetic</a> </h1>
					<h3>This website is made for educational purposes. </h3>
                    <h5>Copyright © 2021 Soyun</h5>
					
			</div>
		</div>

	);
}



export default Footer;