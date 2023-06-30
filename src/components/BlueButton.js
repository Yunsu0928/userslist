import React from "react";
import styled from "styled-components";

const Container = styled.button`
	width: 50%;
	border: none;
	background-color: #ffffff;
	&:hover {
		background-color: #849fff;
		border-radius: 10%;
	}
`;

function BlueButton() {
	return <Container></Container>;
}

export default BlueButton;
