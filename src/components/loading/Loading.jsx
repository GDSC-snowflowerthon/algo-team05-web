import Spinner from "@/assets/images/spinner/Spinner2.gif";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.44);
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55%;
  align-items: center;
  color: #3e4958;
  font-size: 15px;
  font-weight: 400;
  pointer-events: none;
  text-align: center;
`;

export default function Loading() {
  // 룰렛으로 데이터 전달
  return (
    <Wrapper>
      <LoadingContainer>
        <img src={Spinner} alt="로딩" width="30%" />
        대피소를 불러오고 있습니다...
      </LoadingContainer>
    </Wrapper>
  );
}
