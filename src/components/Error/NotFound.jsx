import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoWarningOutline } from "react-icons/io5";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  align-items: center;
  z-index: 1000;
  background-color: #f9faff;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  color: #333d42;
  font-size: 18px;
  font-weight: 700;
  pointer-events: none;
  text-align: center;
`;

const WarningIcon = styled(IoWarningOutline)`
  margin-top: 85%;
  width: 50px;
  height: 50px;
  color: #e51b26;
`;

export default function NotFound() {
  const navigate = useNavigate();
  const [time, setTime] = useState("3");

  const NavigateHome = () => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);

    setTimeout(() => {
      setTime("2");
    }, 1000);

    setTimeout(() => {
      setTime("1");
    }, 2000);
  };

  useEffect(() => {
    NavigateHome("/home");
  }, []);
  // 룰렛으로 데이터 전달
  return (
    <Wrapper>
      <WarningIcon />
      <LoadingContainer>
        잘못된 페이지입니다! <br />
        {time}초 후 Home으로 이동합니다...
      </LoadingContainer>
    </Wrapper>
  );
}
