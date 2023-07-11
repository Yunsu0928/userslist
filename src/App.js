import { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

import UserItem from "./components/UserItem";
import Pagination from "./components/Pagination";

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
	const [limit, setLimit] = useState(9); // 페이지당 유저 수 // postsPerPage
	const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
	// const offset = (currentPage - 1) * limit; // 첫 유저의 위치(인덱스)
	// 1번째 페이지의 첫 유저 위치(index) : 0 : (1-1)*9 = 0
	// 2번째 페이지의 첫 유저 위치(index) : 9 : (2-1)*9 = 9
	// 3번째 페이지의 첫 유저 위치(index) : 18 : (3-1)*9 = 18
	// 4번째 페이지의 첫 유저 위치(index) : 27 : (4-1)*9 = 27

	useEffect(() => {
		fetch("https://randomuser.me/api?results=100")
			.then((res) => res.json())
			.then((d) => {
				// console.log(d.results[0]);
				setData(d.results);
				//setData([d.results]) >> 블로그 작성
			});
	}, []);

	// console.log("data:", data);

	//마지막 유저의 인덱스를 가져오는 것
	const indexOfLastUsers = currentPage * limit;
	// 첫 번째 유저의 인덱스 얻는 법
	const indexOfFirstUsers = indexOfLastUsers - limit;
	// 현재 유저를 가져오는 것
	// 원하는 유저 수를 9개로 잘라낼 수 있도록 마지막 유저의 인덱스를 이용해서
	const currentUsers = data.slice(indexOfFirstUsers, indexOfLastUsers);

	// 페이지 바꾸기
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
					{/* 원래는 data.map을 돌렸지만, 1페이지 2페이지마다 보이는 users들을 보여줘야하니까 currentUsers.map이다 */}
					{currentUsers.map((e) => {
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
				{data.length !== 0 && (
					<Pagination
						limit={limit}
						totalUsers={data.length}
						paginate={paginate}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</InnerContainer>
		</Container>
	);
}

export default App;
