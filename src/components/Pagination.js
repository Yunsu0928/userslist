import React from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
	margin-top: 3%;
	display: flex;
	/* align-items: center; */
`;

const StyledButton = styled.button`
	padding: 1.8%;
	/* border: 1px solid #bfc8e5; */
	border: none;
	background-color: white;
`;

const StyledUl = styled.ul`
	list-style: none;
	padding: 0px;
	width: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLi = styled.li`
	float: left;
	border: 1px solid #bfc8e5;
	padding: 2%;
`;

const StyledA = styled.a`
	text-decoration: none;
	color: black;
`;

function Pagination({
	limit,
	totalUsers,
	paginate,
	currentPage,
	setCurrentPage,
}) {
	const initPageNum =
		Math.ceil(totalUsers / limit) > 10 ? 10 : Math.ceil(totalUsers / limit);
	const [pageNumbers, setPageNumbers] = useState(
		new Array(initPageNum).fill().map((_, i) => i + 1)
	);

	// const initPageNum =
	// 	Math.ceil(totalUsers / limit) > 10 ? 10 : Math.ceil(totalUsers / limit);
	// const [pageNumbers, setPageNumbers] = useState([]);

	// useEffect(() => {
	// 	setPageNumbers(new Array(initPageNum).fill().map((_, i) => i + 1));
	// }, [initPageNum]);

	// console.log(pageNumbers);
	// console.log(totalUsers);

	// for (let i = 1; i <= Math.ceil(totalUsers / limit); i++) {
	// 	pageNumbers.push(i);
	// }

	return (
		<StyledNav>
			<StyledButton
				onClick={() => {
					if (currentPage === 1) return;
					setCurrentPage(Math.abs(currentPage - 1));
					if (currentPage % 10 === 1) {
						const newArray = [];
						for (let i = currentPage - 10; i <= currentPage - 1; i++) {
							newArray.push(i);
						}
						setPageNumbers(newArray);
					}
				}}
			>
				&lt;
			</StyledButton>
			{/* {console.log(currentPage)} */}
			<StyledUl>
				{pageNumbers.map((number) => (
					<StyledLi key={number}>
						<StyledA
							onClick={() => {
								paginate(number);
							}}
							href=""
						>
							{number}
						</StyledA>
					</StyledLi>
				))}
			</StyledUl>
			<StyledButton
				onClick={() => {
					if (currentPage === Math.ceil(totalUsers / limit)) return;
					setCurrentPage(Math.abs(currentPage + 1));
					if (currentPage % 10 === 0) {
						const newArray = [];
						for (let i = currentPage + 1; i <= currentPage + 10; i++) {
							if (i > Math.ceil(totalUsers / limit)) break;
							newArray.push(i);
						}
						setPageNumbers(newArray);
					}
				}}
			>
				&gt;
			</StyledButton>
		</StyledNav>
	);
}

export default Pagination;
