import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 0 100px;
  box-sizing: border-box;
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default Layout;
