import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1``;
const Wrapper = styled.div`
  width: 1000px;
  position: relative;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;
const Content = styled.div`
  background-color: white;
  padding: 20px 30px;
  a{
    text-decoration: underline;
    display: inline-block;
    color: #3cb69c;
  }
`;
const ContentsBox = styled.div`
  overflow: hidden;
  border-radius: 12px;
  width: 100%;
  position: absolute;
  top: 500px;
  box-shadow: 2px 2px 24px rgba(0, 0, 0, 0.2);
`;

const ProjectDetail = () => {
  return (
    <>
      <Link to="/">
        <Title>조유나 포트폴리오</Title>
      </Link>
      <Wrapper>
        <img
          src="https://private-user-images.githubusercontent.com/113437204/422264431-bb29e9ce-b0d6-4d50-af21-651233385d48.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI4Mzc5MTIsIm5iZiI6MTc0MjgzNzYxMiwicGF0aCI6Ii8xMTM0MzcyMDQvNDIyMjY0NDMxLWJiMjllOWNlLWIwZDYtNGQ1MC1hZjIxLTY1MTIzMzM4NWQ0OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNFQxNzMzMzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iODA0ZTBmZmFmMGMzZjNiMWU3MGM0OTBhYjM3NTc2YTg1YmRkMGIzOWQxZDVkMDJjMTU0NTMxZDcwMzc4ZTdlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.RH1mysubWuJEBPqaRrf-LGbuCtp6ALseGzgIguGwmt4"
          alt="급여 관리 시스템"
        />
        <ContentsBox>
          <Content>
            <h1>급여 관리 시스템</h1>
            <a href="https://github.com/Dev-FE-3/toy-project2-team2">▶︎ 깃헙 바로가기</a>
            <p>React, Styled-Component, Firebase, Redux, Figma</p>
            <ul>
              <li>페이지 디자인</li>
              <li>권한별 라우팅</li>
              <li>Firestore 기반의 데이터 저장 및 조회 기능 개발</li>
            </ul>
          </Content>
        </ContentsBox>
      </Wrapper>
    </>
  );
};

export default ProjectDetail;
