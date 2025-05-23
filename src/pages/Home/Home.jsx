import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ContentTitle = styled.h2`
  margin-top: 5px;
`;
const ContentSubTitle = styled.h3`
  font-weight: normal;
`;
const ContentBox = styled.div`
  width: 560px;
  padding: 20px 24px;
  border: 1px solid #e6e6e6;
  margin-bottom: 20px;
  border-radius: 12px;
`;
const Title = styled.h1``;

function Home() {
  return (
    <>
      <Title>조유나 포트폴리오</Title>
      <ContentsWrapper>
        <Link to="/급여-관리-시스템">
          <ContentBox>
            <ContentTitle>급여 관리 시스템</ContentTitle>
            <ContentSubTitle>
              가상의 기업, Sweet Ten을 위한 급여 관리 시스템
            </ContentSubTitle>
            <img
              src="https://velog.velcdn.com/images/j0n0m2/post/19f15438-e381-4589-82fc-ac82d2a22ca4/image.png"
              alt="급여 관리 시스템"
              width="560px"
            />
          </ContentBox>
        </Link>
        <Link to="/리플레이">
          <ContentBox>
            <ContentTitle>리플레이</ContentTitle>
            <ContentSubTitle>
              게임 영상 플레이리스트 공유 플랫폼 (모바일 전용)
            </ContentSubTitle>
            <img
              src="https://private-user-images.githubusercontent.com/67031524/435025541-fa641f2b-4b32-4439-bb10-26a3536144f6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY1MjUyNTYsIm5iZiI6MTc0NjUyNDk1NiwicGF0aCI6Ii82NzAzMTUyNC80MzUwMjU1NDEtZmE2NDFmMmItNGIzMi00NDM5LWJiMTAtMjZhMzUzNjE0NGY2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTA2VDA5NDkxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTllNDIyNThkM2ZiOWUwM2IxYTIyZWVjNjRkNjhmNmRmMWFjZmY1YzYzMzlmNTQ3YTI2MTJlNTU3ODY3M2I5ODQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.uiu2XlziGwT8zq05YByqEPjMr5MpGtsgh-R0jcG9di0"
              alt="리플레이"
              width="560px"
            />
          </ContentBox>
        </Link>

        <ContentBox>
          <ContentTitle>Error! (Loud and Soft)</ContentTitle>
          <ContentSubTitle>
            음악을 시각화하는 인터랙티브 영상 디자인 프로젝트
          </ContentSubTitle>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=RJYftcy2zPM"
            width="560px"
            height="315px"
            controls
          />
        </ContentBox>
        <ContentBox>
          <ContentTitle>사과</ContentTitle>
          <ContentSubTitle>
            사용자의 표정을 인식하여 사과의 상태가 변화하는 프로젝트
          </ContentSubTitle>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=gER-K9mMuks"
            width="560px"
            height="315px"
            controls
          />
        </ContentBox>
      </ContentsWrapper>
    </>
  );
}

export default Home;
