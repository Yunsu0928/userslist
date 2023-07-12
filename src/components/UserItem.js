import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 30%;
	height: 60%;
	background-color: #fbfcff;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 15px;
	padding-left: 1%;
	margin-bottom: 1%;
	border-radius: 8%;
	&:hover {
		border: 1px solid #bfc8e5;
	}
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

function UserItem({ img, first, last, city, country, age }) {
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
					{tag.slice(0, (age % tag.length) + 1).map((e) => {
						return <StyledTag>{e}</StyledTag>;
					})}
					{/* tag배열에 있는 요소들을 slice해서 보여주면 하나의 문자열로 보여지게 된다. 
                    slice는 배열이 결과물이니까 map을 돌려서 각 요소에 StyledTag css요소를 준다 */}
				</StyledTagBox>
			</UserInfo>
		</Container>
	);
}

export default UserItem;
