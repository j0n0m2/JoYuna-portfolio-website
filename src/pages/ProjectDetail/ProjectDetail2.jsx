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
  a {
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

const ProjectDetail2 = () => {
  return (
    <>
      <Link to="/">
        <Title>조유나 포트폴리오</Title>
      </Link>
      <Wrapper>
        <img
          src="https://private-user-images.githubusercontent.com/67031524/435025541-fa641f2b-4b32-4439-bb10-26a3536144f6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY1MjUyNTYsIm5iZiI6MTc0NjUyNDk1NiwicGF0aCI6Ii82NzAzMTUyNC80MzUwMjU1NDEtZmE2NDFmMmItNGIzMi00NDM5LWJiMTAtMjZhMzUzNjE0NGY2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTA2VDA5NDkxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTllNDIyNThkM2ZiOWUwM2IxYTIyZWVjNjRkNjhmNmRmMWFjZmY1YzYzMzlmNTQ3YTI2MTJlNTU3ODY3M2I5ODQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.uiu2XlziGwT8zq05YByqEPjMr5MpGtsgh-R0jcG9di0"
          alt="리플레이"
        />
        <ContentsBox>
          <Content>
            <h1>리플레이</h1>
            <a href="https://github.com/Dev-FE-3/toy-project3-team1">
              ▶︎ 깃헙 바로가기
            </a>
            <p>React, TypeScript, TailWind CSS, Supabase, Figma</p>
            <ul>
              <li>페이지 디자인</li>
              <li>Framer motion을 활용한 부드러운 스크롤 애니메이션 구현</li>
              <li>
                useSuspenseInfiniteQuery를 활용하여 끊김없는 무한 스크롤 구현
              </li>
              <li>
                <a href="https://github.com/Dev-FE-3/toy-project3-team1/wiki/FOUT-%ED%98%84%EC%83%81%EC%9D%84-%EB%A7%89%EC%95%84%EB%B3%B4%EC%9E%90">
                  FOUT 현상 개선 (글)
                </a>
              </li>
              <li>
                로딩 시간이 짧은 사용자를 고려하여 DeferredComponent로 스켈레톤
                로딩 타이밍 조정
              </li>
              <li>
                좋아요와 구독 버튼을 낙관적 업데이트 방식으로 구현하여
                사용자에게 즉각적인 피드백을 제공
              </li>
            </ul>
          </Content>
        </ContentsBox>
      </Wrapper>
    </>
  );
};

export default ProjectDetail2;
