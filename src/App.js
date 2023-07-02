import { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

import UserItem from "./components/UserItem";

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
	height: 70%;
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

const UsersBox = styled.div`
	width: 90%;
	height: 50%;
	display: flex;
	flex-wrap: wrap;
	overflow: scroll;
`;

function App() {
	const [data, setData] = useState([]);
	const button = ["Reputation", `New users`, "Voters", "Editors", "Moderators"];

	useEffect(() => {
		fetch("https://randomuser.me/api?results=10")
			.then((res) => res.json())
			.then((d) => {
				// console.log(d.results[0]);
				setData(d.results);
				//setData([d.results]) >> 블로그 작성
			});
	}, []);

	console.log("data:", data);

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
				<UsersBox>
					{data.map((e) => {
						return (
							<UserItem
								img={e.picture.large}
								first={e.name.first}
								last={e.name.last}
								city={e.location.city}
								country={e.location.country}
								age={e.dob.age}
							/>
						);
					})}
				</UsersBox>
			</InnerContainer>
		</Container>
	);
}

export default App;
