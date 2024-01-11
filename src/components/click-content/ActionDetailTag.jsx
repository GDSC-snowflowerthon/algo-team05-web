import styled from "styled-components";

export default function ActionDetailTag() {
  return (
    <Wrapper>
      <Content>준비 중입니다.</Content>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 200px;
`;

// pointer-events: none; : 글자 hover 이벤트 제거
export const Content = styled.div`
  color: #3e4958;
  font-size: 15px;
  font-weight: 400;
  pointer-events: none;
`;
