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
          src="https://private-user-images.githubusercontent.com/148299246/426209176-b3ba6eba-742b-476c-a2d7-fcee944ee735.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI4Mzk4NDEsIm5iZiI6MTc0MjgzOTU0MSwicGF0aCI6Ii8xNDgyOTkyNDYvNDI2MjA5MTc2LWIzYmE2ZWJhLTc0MmItNDc2Yy1hMmQ3LWZjZWU5NDRlZTczNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyNFQxODA1NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYTAzYzkwNTU0ODZkYjg2YWRiNDk4ZmY4MDdhNTQ1NzZjZWQyNWZhMGZjZWU5ZjQ3N2Y4YzcyNWMwMDMwNWQ3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ad5PbfLph1gJ3PeWqWaUD4qGv4zKfBsyRDDnvFmuTy4"
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
