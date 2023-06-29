import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 33%;
	height: 100%;
	background-color: #fbfcff;
	display: flex;
	justify-content: center;
	margin-left: 2px;
	margin-bottom: 1%;
`;

const UserImg = styled.div`
	width: 50%;
	border: 1px solid red;
	border-radius: 50%;
`;

const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

function UserItem({ img, first, last, city, country }) {
	return (
		<Container>
			<UserImg>{img}</UserImg>
			<UserInfo>
				<div>
					{first}&nbsp;{last}
				</div>
				<div>
					{city}, {country}
				</div>
				<div>clothes, stem</div>
			</UserInfo>
		</Container>
	);
}

export default UserItem;
