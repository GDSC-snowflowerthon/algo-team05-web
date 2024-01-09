import styled from "styled-components";
import { theme } from "@/styles/theme";

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
  width: 50%;
  padding: 14px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #f9faff;
  border-radius: 15px;
  background-color: #8ed0f4;
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  z-index: 500;
`;

export const ButtonStyleNon = styled.button`
  margin-top: ${(props) => props.top || "0"};
  width: 50%;
  padding: 14px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: rgba(141, 166, 187, 0.3);
  border-radius: 15px;
  background: #e7edf2;
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  z-index: 500;
`;

/* ClickContent 페이지 */
export const Title = styled.div`
  margin-top: ${(props) => props.top || "95px"};
  font-size: 25px;
  font-weight: 700;
  color: #333d42;
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
`;

export const Content = styled.div`
  padding: 25px;
  color: #333d42;
  font-size: 15px;
  font-weight: 400;
`;

/* Map 페이지 */

export const IntroText = styled.div`
  margin-top: 30px;
  color: #333d42;
  font-size: 15px;
  font-weight: 400;
`;
