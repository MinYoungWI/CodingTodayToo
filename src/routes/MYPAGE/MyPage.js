import styled from "styled-components";
import { Link } from "react-router-dom";

const UpperContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  #logoImage {
    width: 50px;
    height: 50px;
  }

  span {
    margin-top: 10px;
    font-weight: 600;
  }
`;

const LowerContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px auto;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px ridge gray;
  width: 100%;
  height: 120px;

  #profileImage {
    margin-left: 30px;
    width: 80px;
    height: 80px;
  }
  #userName {
    margin-left: 30px;
    font-weight: 600;
  }
`;
const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 50%;
`;

const UpperLine = styled.div`
  disply: flex;
  border: 1px solid black;
  height: 1px;
  width: 100%;
`;
const LowerLine = styled.div`
  disply: flex;
  border: 1px solid black;
  height: 1px;
  width: 100%;
`;

const ListWrapper = styled.div`
  display: flex;
  height: 250px;
  ul {
    margin-top: 30px;
    line-height: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    text-align: left;
  }
`;

const UnderLine = styled.div`
  border-bottom: 1px solid #d5d5d5;
  height: 10px;
  width: 48vw;
`;

const SplitLine = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid gray;
`;

const StyledLink = styled(Link)`
  text-decoration: none;  // 밑줄 제거
  color: inherit;  // 부모 요소의 색상을 상속받음
  &:hover {
    text-decoration: none;  // 마우스 오버 시 밑줄이 나타나지 않도록 설정
  }
`;

const MyPage = () => {
  return (
    <div>
      <UpperContainer>
        <img id="logoImage" src="/logo.jpg" alt="로고" />
        <span>오늘도 코딩</span>
      </UpperContainer>
      <LowerContainer>
        <ProfileWrapper>
          <img id="profileImage" src="/profile.jpg" />
          <span id="userName">홍길동(아무개)</span>
        </ProfileWrapper>
      </LowerContainer>
      <MainContainer>
        <UpperLine></UpperLine>
        <ListWrapper>
          <ul>
            <li><StyledLink to="/mypage/userinfo">회원정보</StyledLink></li>
            <UnderLine />
            <li>공지사항</li>
            <UnderLine />
            <li>버전</li>
            <UnderLine />
            <li>설정</li>
          </ul>
        </ListWrapper>
        <SplitLine />
      </MainContainer>
    </div>
  );
};

export default MyPage;
