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
	background-image: ${(props) => `url(${props.url})`};
	width: 40%;
	height: 70%;
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

const StyledTagBox = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const StyledTag = styled.span`
	width: fit-content;
	padding: 1% 2%;
	margin-top: 3%;
	margin-right: 2%;
	font-size: 11px;
	border: 1px solid #bfc8e6;
	border-radius: 20%;
	color: #516fd4;
`;

function UserItem({ img, first, last, city, country }) {
	const tag = ["clothes", "electric", "nature", "music", "trip"];

	return (
		<Container>
			<UserImg url={img} />
			{/* 또다른 방법 <UserImg src={img} /> 위의 styled에 img태그로 변환! */}
			<UserInfo>
				<StyledUsername>
					{first}&nbsp;{last}
				</StyledUsername>
				<StyledCountry>
					{city}, {country}
				</StyledCountry>
				<StyledTagBox>
					{tag.map((e) => {
						return <StyledTag>{e}</StyledTag>;
					})}
				</StyledTagBox>
			</UserInfo>
		</Container>
	);
}

export default UserItem;
