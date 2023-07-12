import React from "react";
import styled from "styled-components";

const Container = styled.div`
	background-image: url(http://blogs.wisetechlabs.com/wp-content/uploads/2018/08/how-to-fix-a-404-not-found-error-in-your-browser-wise-tech-labs.jpg);
`;

const InnerContainer = styled.div``;

function NotFound() {
	return (
		<Container>
			<InnerContainer></InnerContainer>
		</Container>
	);
}

export default NotFound;
