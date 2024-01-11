import styled from "styled-components";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { codes } from "@/data/CountryCode";
import { areas } from "@/data/Area";
import { seoulArea } from "@/data/seoulArea";
import { getUserInfo } from "@/api/getUserInfo";
import { setUserInfo } from "@/api/setUserInfo";
import LanguageSelectBar from "@/components/select/LanguageSelectBar";
import CitySelectBar from "@/components/select/CitySelectBar";
import GuSelectBar from "@/components/select/GuSelectBar";

export default function Setting({ setIsShow }) {
  const [isOn, setIsOn] = useState(true);
  const [data, setData] = useState();
  const [language, setLanguage] = useState("");
  const [city, setCity] = useState("");
  const [gu, setGu] = useState("");

  console.log(data);

  const handleOn = () => {
    setIsOn(!isOn);
  };

  const handleSave = () => {
    setIsShow(false);
    (async () => {
      try {
        const newData = await setUserInfo(city.label, gu.label, language.label);
        console.log(newData);
        // Do something with the translationData
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  };

  // 유저 정보 바로 받아오기
  useEffect(() => {
    (async () => {
      try {
        const newData = await getUserInfo();
        console.log(newData);
        setData(newData);
        // Do something with the translationData
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <SettingBox>
        <Title>설정</Title>
        <ContentBox>
          <Content top="19px">언어(lenguage)</Content>
          <LanguageSelectBar data={codes} setLanguage={setLanguage} />
          <Content top="11px">지역(area)</Content>
          <CitySelectBar data={areas} setCity={setCity} />
          <Content top="11px">구(gu)</Content>
          <GuSelectBar data={seoulArea} setGu={setGu} />
          <Content top="11px">번역(translate)</Content>
          {isOn ? (
            <OnOffBox onClick={handleOn}>
              <OnBtn>On</OnBtn>
              <OffBtn>Off</OffBtn>
            </OnOffBox>
          ) : (
            <OnOffBox onClick={handleOn}>
              <OnBtn bg="transparent" shadow="none" color="#f9faff">
                On
              </OnBtn>
              <OffBtn
                bg="#F9FAFF"
                shadow="0px 0px 7px 0px rgba(0, 0, 0, 0.25)"
                color="#333d42"
              >
                Off
              </OffBtn>
            </OnOffBox>
          )}
        </ContentBox>
        <ButtonStyle top="27px" onClick={handleSave}>
          저장
        </ButtonStyle>
      </SettingBox>
    </Wrapper>
  );
}

/* <Setting> 컴포넌트의 propTypes를 정의하면 useState 함수도 props로 사용할 수 있다.
 isRequired : 필수 prop임을 의미한다. */
Setting.propTypes = {
  setIsShow: PropTypes.func.isRequired,
};

export const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const SettingBox = styled.div`
  margin-top: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 55%;
  border-radius: 20px;
  border: 1px solid #2f88a4;
  background: #f9faff;
  z-index: 500;
`;

export const ContentBox = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Title = styled.div`
  margin-top: 21px;
  color: #333d42;
  font-size: 15px;
  font-weight: 400;
  pointer-events: none;
`;

export const Content = styled.div`
  color: #333d42;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  margin-top: ${(props) => props.top || "0"};
  pointer-events: none;
`;

export const OnOffBox = styled.div`
  margin-top: 8px;
  display: flex;
  border-radius: 30px;
  background: #8ed0f4;
  text-align: right;
  justify-content: center;
  color: #f9faff;
  font-family: Chakra Petch;
  font-size: 12px;
  font-weight: 400;
  max-width: 75px;
  padding: 3px 0px 3px 0px;
`;

export const OnBtn = styled.div`
  display: flex;
  border-radius: 30px;
  color: ${(props) => props.color || "#333d42"};
  background: ${(props) => props.bg || "#F9FAFF"};
  box-shadow: ${(props) =>
    props.shadow || "0px 0px 7px 0px rgba(0, 0, 0, 0.25)"};
  text-align: center;
  justify-content: center;
  font-family: Chakra Petch;
  font-size: 12px;
  font-weight: 400;
  padding: 3px 9px 3px 9px;
  cursor: pointer;
`;

export const OffBtn = styled.div`
  text-align: center;
  font-family: Chakra Petch;
  font-size: 12px;
  font-weight: 400;
  padding: 3px 9px 3px 9px;
  color: ${(props) => props.color || "#f9faff"};
  background: ${(props) => props.bg || "0"};
  box-shadow: ${(props) => props.shadow || "none"};
  border-radius: 30px;
  cursor: pointer;
`;

export const ButtonStyle = styled.button`
  margin-top: ${(props) => props.top || "0"};
  width: 60%;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  color: #f9faff;
  border-radius: 20px;
  background-color: #8ed0f4;
  box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
    -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;
