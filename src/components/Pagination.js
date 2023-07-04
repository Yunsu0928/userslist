import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
	margin-top: 1%;
`;

const StyledUl = styled.ul`
	list-style: none;
`;

const StyledLi = styled.li`
	float: left;
	border: 1px solid #bfc8e5;
	padding: 5px 10px;
`;

const StyledA = styled.a`
	text-decoration: none;
	color: black;
`;

function Pagination({ limit, totalUsers, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalUsers / limit); i++) {
		pageNumbers.push(i);
	}

	return (
		<StyledNav>
			<StyledUl>
				{pageNumbers.map((number) => (
					<StyledLi key={number}>
						<StyledA
							onClick={() => {
								paginate(number);
							}}
							href="!#"
						>
							{number}
						</StyledA>
					</StyledLi>
				))}
			</StyledUl>
		</StyledNav>
	);
}

export default Pagination;
