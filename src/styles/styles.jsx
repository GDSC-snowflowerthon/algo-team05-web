import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";
import InfoImoge from "@/assets/images/shelter/information.svg";
import SearchImoge from "@/assets/images/shelter/search.svg";
import ScrollArrow from "@/assets/images/shelter/scrollarrow.svg";
import Logo from "@/assets/images/start/logo.svg";

const slideOn = keyframes`
  0% {
    transform: translateY(30%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 페이지별로 용도 나눠주세요
/**  샘플 페이지 스타일 **/
export const Sample = styled.div`
  background-color: ${theme.yellow};
`;

/* 기본 Wrapper 스타일 */
export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  max-width: 390px;
  background-color: #f9faff;
  align-items: center;
`;

/* other pages... */

export const ButtonStyle = styled.button`
  margin-top: ${(props) => props.top || "0"};
  margin-bottom: ${(props) => props.bottom || "0"};
  width: 60%;
  padding: 14px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  font-family: Chakra Petch;
  color: ${(props) => props.color || "#f9faff"};
  border-radius: 15px;
  background-color: ${(props) => props.bg || "#8ed0f4"};
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  font-famiy: "Chakra petch";
`;

export const HomeButtonStyle = styled.button`
  margin-top: ${(props) => props.top || "0"};
  margin-bottom: ${(props) => props.bottom || "0"};
  width: 60%;
  padding: 14px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  font-family: Chakra Petch;
  color: ${(props) => props.color || "#f9faff"};
  border-radius: 15px;
  background-color: ${(props) => props.bg || "#8ed0f4"};
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  font-famiy: "Chakra petch";
  animation: ${FadeIn} 2s ease-in-out;
`;

export const TextLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 80%;
`;

export const ErrorBox = styled.div`
  position: absolute;
  visibility: ${(props) => props.visible || "hidden"};
  color: ${(props) => props.color || "none"};
  top: ${(props) => props.top || "0px"};
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;

// 활성화 아닌 경우
/*
  color: rgba(141, 166, 187, 0.3);
  background: #e7edf2;
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
*/

/* ClickContent 페이지 */

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: auto;
`;

export const Title = styled.div`
  margin-top: ${(props) => props.top || "95px"};
  font-size: 25px;
  font-weight: 700;
  color: #333d42;
  pointer-events: none;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  margin-top: ${(props) => props.top || "0"};
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 80%;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #333d42;
  align-items: center;
  justify-content: center;
`;

export const ContentForBox = styled.div`
  position: absolute;
  top: -10px;
  max-width: 50%;
  max-height: 20%;
  background-color: #f9faff;
`;

export const ContentFor = styled.div`
  color: #333d42;
  font-size: 15px;
  font-weight: 400;
  padding: 3px 10px 3px 10px;
  pointer-events: none;
`;

export const Content = styled.div`
  padding: 25px;
  color: #333d42;
  font-size: 15px;
  font-weight: 400;
  pointer-events: none;
`;

export const SlideContent = styled.div`
  margin-top: 40px;
  color: #333d42;
  font-size: 15px;
  font-weight: 400;
  pointer-events: none;
`;

/* Map 페이지 */

export const IntroText = styled.div`
  margin-top: 30px;
  color: #333d42;
  font-size: 15px;
  font-weight: 400;
  pointer-events: none;
`;

/* shelter 페이지 */
export const Information = styled.div`
  margin-top: 68px;
  margin-left: 7px;
  width: 20px;
  height: 20px;
  background: url(${InfoImoge});
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchBox = styled.div`
  position: relative;
  margin-top: 27px;
  width: 85%;
  border-radius: 8px;
  border: 1px solid rgba(47, 136, 164, 0.3);
  background: #fff;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px;
`;

export const SearchIconBox = styled.button`
  top: 0;
  right: 0;
  position: absolute;
  display: flex;
  background: #2f88a4;
  width: 15%;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SearchIcon = styled.div`
  width: 26px;
  height: 26px;
  background: url(${SearchImoge});
  background-repeat: no-repeat;
`;

export const ShelterContent = styled.div`
  margin-top: 16px;
  color: #333d42;
  font-size: 15px;
  font-weight: 400;
  pointer-events: none;
`;

export const ListBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  margin-top: 28px;
  width: 100%;
  max-height: 450px;
  background-color: translate;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0; /* 숨김 */
  }
  /* Firefox */
  scrollbar-width: none; /* Firefox 64+ */
  -ms-overflow-style: none;
`;

export const ShelterButtonStyle = styled.div`
  max-width: 50px;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: #f9faff;
  border-radius: 20px;
  background-color: #2f88a4;
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  font-famiy: "Chakra petch";
`;

export const ShelterTagBox = styled.div`
  margin-top: 20px;
  width: 78%;
  padding: 10px;
  height: 80px;
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0; /* 숨김 */
  }
  /* Firefox */
  scrollbar-width: none; /* Firefox 64+ */
  -ms-overflow-style: none;
`;

/*
export const ListShadow = styled.div`
  position: absolute;
  top: 150px;
  display: flex;
  background: linear-gradient(-180deg, #fff 0%, rgba(255, 255, 255, 0) 64.5%);
  width: 80%;
  height: 100%;
  z-index: 100;
`;
*/

export const ScrollIcon = styled.div`
  margin-top: ${(props) => props.top || "10px"};
  width: 40px;
  height: 30px;
  background: url(${ScrollArrow});
  background-repeat: no-repeat;
  z-index: 100;
`;

export const DetailTagBox = styled.div`
  margin-top: -230px;
  z-index: 100;
`;

/* 첫 화면 Start 스타일*/
export const SettingsButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  outline: none;
  img {
    width: 30px;
  }
  display: flex;
  margin: 10px;
`;

export const HomeLogo = styled.div`
  margin-top: 160px;
  width: 170px;
  height: 190px;
  background: url(${Logo});
  background-repeat: no-repeat;
  animation: ${slideOn} 0.8s ease-in-out;
`;

export const ServiceTitle = styled.div`
  margin-top: 20px;
  color: #333d42;
  text-align: center;
  font-family: Chakra Petch;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.312px;
  animation: ${slideOn} 0.8s ease-in-out;
  pointer-events: none;
`;

export const ServiceContent = styled.div`
  margin-top: 5px;
  color: #333d42;
  text-align: center;
  font-family: Chakra Petch;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.312px;
  animation: ${slideOn} 0.8s ease-in-out;
  pointer-events: none;
`;

export const ServiceInform = styled.div`
  margin-top: 20px;
  color: #333d42;
  text-align: center;
  font-family: Chakra Petch;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.312px;
  animation: ${slideOn} 0.8s ease-in-out;
  pointer-events: none;
`;
/* quiz 페이지 스타일*/
export const RegisterButtonStyle = styled.button`
  margin-top: ${(props) => props.top || "0"};
  width: 50%;
  padding: 14px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #f9faff;
  border-radius: 15px;
  border-color: #8ed0f4;
  background-color: ${(props) =>
    props.disabled
      ? "#ccc"
      : "#8ed0f4"}; /* isFormValid가 false면 회색, true면 기존 색상 */
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
`;
export const Ttitle = styled.div`
  margin-top: 115px;
  font-size: 25px;
  color: #333d42;
  pointer-events: none;
  color: #333d42;
  font-weight: 400;
`;

export const LText = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 350;
  pointer-events: none;
  color: #333d42;
  font-weight: 400;
`;

export const QuizButtonStyle = styled.button`
  margin-top: ${(props) => props.top || "0"};
  width: 30%;
  height: 10%;
  position: absolute;
  bottom: 15%;
  padding: 14px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  color: #f9faff;
  border-radius: 15px;
  border-color: #8ed0f4;
  background-color: ${(props) =>
    props.disabled
      ? "#ccc"
      : "#8ed0f4"}; /* isFormValid가 false면 회색, true면 기존 색상 */
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
`;

export const QuizStyle = styled.div`
  margin-top: ${(props) => props.top || "0"};
  width: 65%;
  height: 40%;
  position: absolute;
  top: 150px;
  bottom: auto;
  padding: 14px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  color: #333d42;
  border-radius: 15px;
  border-color: #ffffff;
  background-color: #FFFFF;
  /* isFormValid가 false면 회색, true면 기존 색상 */
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
`;

/* Home 화면 스타일 */

/* MsgRecord 페이지 */
export const Msgtable = styled.table`
  margin-top: 10px;
  padding: 14px;
  text-align: center;
  font-size: 6.5px;
  font-weight: 900;
  color: #f9faff;
  border-radius: 15px;
  border-color: #8ed0f4;
  background-color: #8ed0f4;
  box-shadow: 2px 2px 2px 0px rgba(171, 194, 212, 0.6),
    -2px -2px 2px 0px rgba(255, 255, 255, 0.5);

  border-collapse: collapse;
  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
  }
  th {
    color: #333d42;
    background-color: #f2f2f2;
  }
`;

/* Login 화면 스타일 */
export const Lttext = styled.div`
  display: flex;
  margin-left: 8px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #333d42;
  align-items: left;
  pointer-events: none;
  color: #333d42;
  font-size: 14px;
  font-weight: 400;
`;

export const Left = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const InputStyled = styled.input`
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #333d42;
  background: #f9faff;
  width: 75%;
  font-size: 14px;
  height: 28px;
  color: ${(props) => (props.value ? "#333D42" : "#ccc")};
`;

/* Register 화면 스타일 */
export const ErrorMessage = styled.div`
  color: #333d42;
  font-size: 15px;
  font-weight: 400;
  padding: 3px 10px 3px 10px;
  overflow: hidden;
  opacity: ${(props) => (props.isFormValid ? 1 : 0)};
  transition: opacity 0.5s;

  p {
    color: red;
  }
`;

export const SelectStyled = styled.select`
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #333d42;
  border-radius: 5px;
  width: 80%;
  font-size: 14px;
  height: 43px;
  backgroundcolor: #ccc;
`;

export const RegisterSelectBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

/* Record 페이지 */
export const TableBox = styled.div`
  position: relative;
  align-items: center;
  margin-top: 28px;
  width: 100%;
  max-width: 350px;
  max-height: 550px;
  background-color: translate;
  overflow-y: auto;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0; /* 숨김 */
  }
  /* Firefox */
  scrollbar-width: none; /* Firefox 64+ */
  -ms-overflow-style: none;
`;
