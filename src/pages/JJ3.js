import { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

import User from "./pages/User";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #bfc8e6;
`;

const InnerContainer = styled.div`
	background-color: #ffffff;
	width: 60%;
	height: 75%;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	border-radius: 10px;
`;

const TitleBox = styled.div`
	margin: 7% 6% 5% 8%;
	width: 85%;
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	font-size: 32px;
`;

const NavBar = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2%;
`;

const SearchBox = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #bfc8e6;
	width: 25%;
	height: 40px;
	padding-left: 1%;
	svg {
		font-size: 20px;
	}
`;

const StyledInput = styled.input`
	border: none;
	width: 100%;
`;

const ButtonBox = styled.div`
	width: 50%;
	display: flex;
`;

const BlueButton = styled.button`
	width: 50%;
	border: none;
	background-color: #ffffff;
	&:hover {
		background-color: #849fff;
		border-radius: 10%;
	}
`;

function App() {
	const button = ["Reputation", `New users`, "Voters", "Editors", "Moderators"];

	return (
		<Container>
			<InnerContainer>
				<TitleBox>
					<Title>Users</Title>
					<NavBar>
						<SearchBox>
							<BiSearch />
							<StyledInput type={"text"} placeholder={"Search users"} />
						</SearchBox>
						<ButtonBox>
							{button.map((e) => {
								return <BlueButton>{e}</BlueButton>;
							})}
						</ButtonBox>
					</NavBar>
				</TitleBox>
				<User />
			</InnerContainer>
		</Container>
	);
}

export default App;
