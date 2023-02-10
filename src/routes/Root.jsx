import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.div`
  background-color: #000000c9;
  width: 200px;
  height: 100vh;
  #link {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      margin: 2rem 0;
      font-size: 3rem;
      color: white;
      text-decoration: none;
    }
  }
`;

export default function Root() {
  return (
    <StyledNav>
      <div id="link">
        <Link to="/"> Home </Link>
        <Link to="/stream"> Stream </Link>
        <Link to="/twitter"> Twitter </Link>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </StyledNav>
  );
}
