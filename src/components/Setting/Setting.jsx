import styled from "styled-components";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { codes } from "@/data/CountryCode";
import { areas } from "@/data/Area";
import { registerData } from "@/pages/register/registerData";
import { getUserInfo } from "@/api/getUserInfo";
import { setUserInfo } from "@/api/setUserInfo";
import LanguageSelectBar from "@/components/select/LanguageSelectBar";
import CitySelectBar from "@/components/select/CitySelectBar";
import GuSelectBar from "@/components/select/GuSelectBar";
import { papagoData } from "../../data/PapagoData";

export default function Setting({ setIsShow, setUser, user }) {
  const cookie = localStorage.getItem("accessToken");
  const cookie_ = localStorage.getItem("language");

  // const [isOn, setIsOn] = useState(true);
  // const [data, setData] = useState();
  const [language, setLanguage] = useState();
  const [city, setCity] = useState();
  const [gu, setGu] = useState();

  const [set, setSet] = useState("설정");
  const [save, setSave] = useState("저장");
  const [can, setCan] = useState("취소");

  const [lan, setLan] = useState("");

  const [area, setArea] = useState([
    { value: "99", label: "" },
    { value: "0", label: "강남구" },
    { value: "1", label: "강동구" },
    { value: "2", label: "강북구" },
    { value: "3", label: "강서구" },
    { value: "4", label: "관악구" },
    { value: "5", label: "광진구" },
    { value: "6", label: "구로구" },
    { value: "7", label: "금천구" },
    { value: "8", label: "노원구" },
    { value: "9", label: "도봉구" },
    { value: "10", label: "마포구" },
    { value: "11", label: "서대문구" },
    { value: "12", label: "서초구" },
    { value: "13", label: "성동구" },
    { value: "14", label: "성북구" },
    { value: "15", label: "송파구" },
    { value: "16", label: "양천구" },
    { value: "17", label: "영등포구" },
    { value: "18", label: "은평구" },
    { value: "19", label: "종로구" },
    { value: "20", label: "중구" },
    { value: "21", label: "중량구" },
  ]);

  useEffect(() => {
    const language = localStorage.getItem("language");
    console.log(language);
    setLan(language);
  }, [user]);

  useEffect(() => {
    if (lan === "ko") {
      setSet(papagoData.ko.설정[0]);
      setSave(papagoData.ko.저장[0]);
      setCan(papagoData.ko.취소[0]);
    } else if (lan === "en") {
      setSet(papagoData.en.설정[0]);
      setSave(papagoData.en.저장[0]);
      setCan(papagoData.en.취소[0]);
    } else if (lan === "ja") {
      setSet(papagoData.ja.설정[0]);
      setSave(papagoData.ja.저장[0]);
      setCan(papagoData.ja.취소[0]);
    } else if (lan === "zh-CN") {
      setSet(papagoData.ja.설정[0]);
      setSave(papagoData.ja.저장[0]);
      setCan(papagoData.ja.취소[0]);
    } else if (lan === "zh-TW") {
      setSet(papagoData.zhCN.설정[0]);
      setSave(papagoData.zhCN.저장[0]);
      setCan(papagoData.zhCN.취소[0]);
    } else if (lan === "vi") {
      setSet(papagoData.vi.설정[0]);
      setSave(papagoData.vi.저장[0]);
      setCan(papagoData.vi.취소[0]);
    } else if (lan === "id") {
      setSet(papagoData.id.설정[0]);
      setSave(papagoData.id.저장[0]);
      setCan(papagoData.id.취소[0]);
    } else if (lan === "th") {
      setSet(papagoData.th.설정[0]);
      setSave(papagoData.th.저장[0]);
      setCan(papagoData.th.취소[0]);
    } else if (lan === "de") {
      setSet(papagoData.de.설정[0]);
      setSave(papagoData.de.저장[0]);
      setCan(papagoData.de.취소[0]);
    } else if (lan === "ru") {
      setSet(papagoData.ru.설정[0]);
      setSave(papagoData.ru.저장[0]);
      setCan(papagoData.ru.취소[0]);
    } else if (lan === "es") {
      setSet(papagoData.es.설정[0]);
      setSave(papagoData.es.저장[0]);
      setCan(papagoData.es.취소[0]);
    } else if (lan === "it") {
      setSet(papagoData.it.설정[0]);
      setSave(papagoData.it.저장[0]);
      setCan(papagoData.it.취소[0]);
    } else if (lan === "fr") {
      setSet(papagoData.fr.설정[0]);
      setSave(papagoData.fr.저장[0]);
      setCan(papagoData.fr.취소[0]);
    } else {
      setSet(papagoData.en.설정[0]);
      setSave(papagoData.en.저장[0]);
      setCan(papagoData.en.취소[0]);
    }
  }, [lan]);

  // console.log(city);
  // console.log(language);
  // console.log(gu);

  // 지역에 따라 구 바꾸기
  useEffect(() => {
    if (city == "서울") {
      setArea(registerData.seoulDistricts);
    } else if (city == "인천") {
      setArea(registerData.icDistricts);
    } else if (city == "경기도") {
      setArea(registerData.gyeonggiDistricts);
    } else if (city == "강원도") {
      setArea(registerData.gangwonDistricts);
    } else if (city == "세종") {
      setArea(registerData.sejongDistrict);
    } else if (city == "대전") {
      setArea(registerData.daejeonDistricts);
    } else if (city == "충청남도") {
      setArea(registerData.cnDistricts);
    } else if (city == "충청북도") {
      setArea(registerData.cbDistricts);
    } else if (city == "경상북도") {
      setArea(registerData.kbDistricts);
    } else if (city == "경상남도") {
      setArea(registerData.knDistricts);
    } else if (city == "대구") {
      setArea(registerData.dagueDistricts);
    } else if (city == "울산") {
      setArea(registerData.ulsanDistricts);
    } else if (city == "부산") {
      setArea(registerData.busanDistricts);
    } else if (city == "전라북도") {
      setArea(registerData.jbDistricts);
    } else if (city == "전라남도") {
      setArea(registerData.jnDistricts);
    } else if (city == "광주") {
      setArea(registerData.gwangjuDistricts);
    } else if (city == "제주") {
      setArea(registerData.jejuDistricts);
    }
  }, [city]);

  const isFormValid = language !== "" && city !== "" && gu !== "";

  const handleSave = () => {
    if (isFormValid) {
      (async () => {
        try {
          localStorage.setItem("language", language.value);
          setUser(!user);
          console.log(user);
          setIsShow(false);
          const newData = await setUserInfo(
            city.value,
            gu.value,
            language.value,
            cookie
          );
          //   console.log(newData);
          // Do something with the translationData
        } catch (error) {
          // Handle errors
          console.error("Error:", error);
        }
      })();
    } else {
      alert("설정을 입력 해주세요.");
    }
  };

  const handleCancel = () => {
    setIsShow(false);
  };

  // onoff용 통신 이벤트
  /*
  const handleOnOff = () => {
    if (isFormValid) {
      console.log("lang: ", language);
      (async () => {
        if (!isOn ? setLanguage(codes[1]) : setLanguage(language));
        try {
          await setUserInfo(city.value, gu.value, language.value, cookie);
          console.log("onOffNewData : ", city.value, gu.value, language.value);
          // Do something with the translationData
        } catch (error) {
          // Handle errors
          console.error("Error:", error);
        }
      })();
    } else {
      alert("설정을 입력 해주세요.");
    }
  };
  */

  const findAreaByValue = (value, data) => {
    const selectedArea = data.find((item) => item.value === value);
    return selectedArea || null; // return null if not found
  };

  // 유저 정보 바로 받아오기
  useEffect(() => {
    (async () => {
      try {
        const newData = await getUserInfo(cookie);
        //  console.log(newData);
        // setData(newData);

        localStorage.setItem("language", newData.language);

        const selectedLanguage = findAreaByValue(newData.language, codes);
        const selectedCity = findAreaByValue(newData.city, areas);
        const selectedGu = findAreaByValue(newData.gu, area);
        setLanguage(selectedLanguage);
        setCity(selectedCity);
        setGu(selectedGu);
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  }, []);

  // onoff용 클릭 이벤트
  /*
  // 왜 안돼..
  const handleOn = () => {
    // 번역 X에서 번역 중으로 이동 시 기존 언어로 변경
    setIsOn(!isOn);
    const beforeLanguage = localStorage.getItem("language");
    console.log(beforeLanguage);
    const selectedLanguage = findAreaByValue(
      localStorage.getItem("language"),
      codes
    );
    setLanguage(selectedLanguage);
    handleOnOff();
  };

  const handleOff = () => {
    setIsOn(!isOn);
    // 번역 중에서 번역 X로 이동 시 한국어로 번경
    setLanguage(codes[1]);
    handleOnOff();
  };
  */

  return (
    <Wrapper>
      <SettingBox>
        <Title>{set}</Title>
        <ContentBox>
          <Content top="19px">언어(language)</Content>
          <LanguageSelectBar
            data={codes}
            setLanguage={setLanguage}
            language={language}
          />
          <Content top="11px">지역(area)</Content>
          <CitySelectBar data={areas} setCity={setCity} city={city} />
          <Content top="11px">구(gu)</Content>
          <GuSelectBar data={area} setGu={setGu} gu={gu} />
        </ContentBox>
        <FlexRow>
          <ButtonStyle top="57px" onClick={handleCancel}>
            {can}
          </ButtonStyle>
          <ButtonStyle top="57px" onClick={handleSave}>
            {save}
          </ButtonStyle>
        </FlexRow>
      </SettingBox>
    </Wrapper>
  );
}

/* <Setting> 컴포넌트의 propTypes를 정의하면 useState 함수도 props로 사용할 수 있다.
 isRequired : 필수 prop임을 의미한다. */
Setting.propTypes = {
  setIsShow: PropTypes.func.isRequired,
  setUser: PropTypes.func,
  user: PropTypes.bool,
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
  height: 50%;
  border-radius: 20px;
  border: 1px solid #2f88a4;
  background: #f9faff;
  z-index: 500;
`;

export const ContentBox = styled.div`
  width: 80%;
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
  width: 100px;
  max-width: 100%;
  padding: 14px;
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

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
