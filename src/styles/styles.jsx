import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";
import InfoImoge from "@/assets/images/shelter/information.svg";
import SearchImoge from "@/assets/images/shelter/search.svg";
import ScrollArrow from "@/assets/images/shelter/scrollarrow.svg";

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
  width: 50%;
  padding: 14px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.color || "#f9faff"};
  border-radius: 15px;
  background-color: ${(props) => props.bg || "#8ed0f4"};
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  z-index: 100;
`;

// 활성화 아닌 경우
/*
  color: rgba(141, 166, 187, 0.3);
  background: #e7edf2;
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
*/

/* ClickContent 페이지 */
export const Title = styled.div`
  margin-top: ${(props) => props.top || "95px"};
  font-size: 25px;
  font-weight: 700;
  color: #333d42;
  pointer-events: none;
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

export const Main = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 700;
  color: #333d42;
  text-align: center;
  opacity: 0;
  transition: opacity 1s;

  &.fade-in {
    opacity: 1;
`;
export const Main_2 = styled.div`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 350;
  color: #333d42;
  text-align: center;

  opacity: 0;
  transition: opacity 1s;

  &.fade-in {
    opacity: 1;
  }
`;
export const Main_3 = styled.div`
  margin-top: 15px;
  margin-bottom: 50px;
  font-size: 15px;
  font-weight: 350;
  color: #333d42;
  text-align: center;

  opacity: 0;
  transition: opacity 1s;

  &.fade-in {
    opacity: 1;
  }
`;
export const StartButtonStyle = styled.button`
  margin-top: 20px;
  width: 50%;
  padding: 14px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: #f9faff;
  border-radius: 15px;
  border-color: #8ed0f4;
  background-color: #8ed0f4;
  box-shadow: 2px 2px 2px 0px rgba(171, 194, 212, 0.6),
    -2px -2px 2px 0px rgba(255, 255, 255, 0.5);
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
  margin-top: 95px;
  font-size: 25px;
  font-weight: 350;
  color: #333d42;
`;

export const LText = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 350;
  color: #333d42;
`;

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
  th, td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
  }
  th {
    color: #333d42;
    background-color: #f2f2f2;
  }
`;
