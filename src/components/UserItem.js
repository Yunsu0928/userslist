import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 33%;
	height: 57%;
	background-color: #fbfcff;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 2px;
	margin-bottom: 1%;
`;

const UserImg = styled.div`
	/* background-image: url(); */
	width: 40%;
	height: 70%;
	border: 1px solid red;
	border-radius: 50%;
`;

const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 6%;
`;

const StyledUsername = styled.div`
	font-weight: bold;
`;

const StyledCountry = styled.div`
	font-size: 13px;
	margin-top: 3%;
`;

const StyledTag = styled.span`
	margin-top: 3%;
	font-size: 10px;
	border: 1px solid black;
`;

function UserItem({ img, first, last, city, country }) {
	const tag = ["clothes", "electric", "nature", "music", "trip"];

	return (
		<Container>
			<UserImg>{img}</UserImg>
			<UserInfo>
				<StyledUsername>
					{first}&nbsp;{last}
				</StyledUsername>
				<StyledCountry>
					{city}, {country}
				</StyledCountry>
				{tag.map((e) => {
					return <StyledTag>{e}</StyledTag>;
				})}
			</UserInfo>
		</Container>
	);
}

export default UserItem;
