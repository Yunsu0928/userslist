import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

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
	margin: 8%;
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
	width: 100%;
	border: none;
	background-color: #ffffff;
	&:hover {
		background-color: #849fff;
		border-radius: 10%;
	}
`;

const UsersBox = styled.div`
	width: 90%;
	background-color: yellow;
	display: flex;
	flex-wrap: wrap;
`;

const UserItem = styled.div`
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

function App() {
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
							<BlueButton>Reputation</BlueButton>
							<BlueButton>New users</BlueButton>
							<BlueButton>Voters</BlueButton>
							<BlueButton>Editors</BlueButton>
							<BlueButton>Moderators</BlueButton>
						</ButtonBox>
					</NavBar>
				</TitleBox>
				<UsersBox>
					<UserItem>
						<UserImg>사진tkdkjakldfjlka</UserImg>
						<UserInfo>
							<div>Lelah Nichols</div>
							<div>Troy, MI</div>
							<div>clothes, stem</div>
						</UserInfo>
					</UserItem>
					<UserItem>
						<UserImg>사진tkdkjakldfjlka</UserImg>
						<UserInfo>
							<div>Lelah Nichols</div>
							<div>Troy, MI</div>
							<div>clothes, stem</div>
						</UserInfo>
					</UserItem>
					<UserItem>
						<UserImg>사진tkdkjakldfjlka</UserImg>
						<UserInfo>
							<div>Lelah Nichols</div>
							<div>Troy, MI</div>
							<div>clothes, stem</div>
						</UserInfo>
					</UserItem>
					<UserItem>
						<UserImg>사진tkdkjakldfjlka</UserImg>
						<UserInfo>
							<div>Lelah Nichols</div>
							<div>Troy, MI</div>
							<div>clothes, stem</div>
						</UserInfo>
					</UserItem>
				</UsersBox>
			</InnerContainer>
		</Container>
	);
}

export default App;
