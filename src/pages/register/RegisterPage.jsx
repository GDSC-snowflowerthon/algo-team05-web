import { useEffect, useState } from "react";
import {
  Lttext,
  LText,
  ButtonStyle,
  Ttitle,
  Wrapper,
  InputStyled,
  RegisterSelectBox,
  TextLeft,
  ErrorBox,
} from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import OriginLanguageSelectBar from "@/components/select/OriginLanguageSelectBar";
import OriginCitySelectBar from "@/components/select/OriginCitySelectBar";
import OriginGuSelectBar from "@/components/select/OriginGuSelectBar";
import { codes } from "@/data/CountryCode";
import { areas } from "@/data/Area";
import { registerData } from "@/pages/register/registerData";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");
  const [city, setCity] = useState("");
  const [gu, setGu] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [correctMessage, setCorrectMessage] = useState("");

  const [change, setChange] = useState(false);

  const [area, setArea] = useState([]);
  /*
  { value: 0, label: "" },
  { value: 0, label: "서울" },
  { value: 0, label: "인천" },
  { value: 0, label: "경기도" },
  { value: 0, label: "강원도" },
  { value: 0, label: "세종" },
  { value: 0, label: "대전" },
  { value: 0, label: "충청남도" },
  { value: 0, label: "충청북도" },
  { value: 0, label: "경상북도" },
  { value: 0, label: "경상남도" },
  { value: 0, label: "대구" },
  { value: 0, label: "울산" },
  { value: 0, label: "부산" },
  { value: 0, label: "전라북도" },
  { value: 0, label: "전라남도" },
  { value: 0, label: "광주" },
  { value: 0, label: "제주" },
  */

  useEffect(() => {
    if (city.label == "서울특별시") {
      setArea(registerData.seoulDistricts);
    } else if (city.label == "인천광역시") {
      setArea(registerData.icDistricts);
    } else if (city.label == "경기도") {
      setArea(registerData.gyeonggiDistricts);
    } else if (city.label == "강원특별자치도") {
      setArea(registerData.gangwonDistricts);
    } else if (city.label == "세종특별자치시") {
      setArea(registerData.sejongDistrict);
    } else if (city.label == "대전광역시") {
      setArea(registerData.daejeonDistricts);
    } else if (city.label == "충청남도") {
      setArea(registerData.cnDistricts);
    } else if (city.label == "충청북도") {
      setArea(registerData.cbDistricts);
    } else if (city.label == "경상북도") {
      setArea(registerData.kbDistricts);
    } else if (city.label == "경상남도") {
      setArea(registerData.knDistricts);
    } else if (city.label == "대구광역시") {
      setArea(registerData.dagueDistricts);
    } else if (city.label == "울산광역시") {
      setArea(registerData.ulsanDistricts);
    } else if (city.label == "부산광역시") {
      setArea(registerData.busanDistricts);
    } else if (city.label == "전라북도") {
      setArea(registerData.jbDistricts);
    } else if (city.label == "전라남도") {
      setArea(registerData.jnDistricts);
    } else if (city.label == "광주광역시") {
      setArea(registerData.gwangjuDistricts);
    } else if (city.label == "제주특별자치도") {
      setArea(registerData.jejuDistricts);
    }
  }, [change]);

  // console.log(registerData);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    // console.log(value);
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    // console.log(value);
    setPassword(value);
    //setPassword(e.target.value);
  };

  const isFormValid =
    email !== "" &&
    password !== "" &&
    language.label !== "" &&
    city.label !== "" &&
    gu.label !== "";

  const handleSignUp = async () => {
    if (isFormValid) {
      setCorrectMessage("가입이 가능합니다.");
      try {
        const response = await fetch(
          "https://api.alertglobal.store/users/join",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              language: language.value,
              city: city.label,
              gu: gu.label,
            }),
          }
        );

        if (response.ok) {
          navigate("/");
          //  console.log("성공");
        } else {
          // 에러 처리
          const data = await response.json();
          setErrorMessage(data.message || "등록 실패");
        }
      } catch (error) {
        //console.error('등록 중 오류 발생:', error);
        setErrorMessage("등록 중 오류가 발생했습니다");
      }
    } else {
      setErrorMessage("모든 정보를 기입해주세요.");
    }
  };

  return (
    <Wrapper>
      <Ttitle style={{ marginTop: "60px" }}>회원가입</Ttitle>
      <LText>희망 언어와 지역을 선택해주세요.</LText>
      <TextLeft>
        <Lttext
          style={{ marginTop: "30px", display: "flex", alignItems: "left" }}
        >
          이메일(email)
        </Lttext>
      </TextLeft>
      <InputStyled
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="email"
      ></InputStyled>
      <TextLeft>
        <Lttext style={{ marginTop: "20px" }}>비밀번호(password)</Lttext>
      </TextLeft>
      <InputStyled
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="password"
      ></InputStyled>
      <RegisterSelectBox>
        <Lttext style={{ marginTop: "20px" }}>언어 선택(language)</Lttext>
        <OriginLanguageSelectBar data={codes} setLanguage={setLanguage} />
        <Lttext style={{ marginTop: "20px" }}>지역 선택(city)</Lttext>
        <OriginCitySelectBar
          data={areas}
          setCity={setCity}
          change={change}
          setChange={setChange}
        />
        <Lttext style={{ marginTop: "20px" }}>시/구/군 선택(gu)</Lttext>
        <OriginGuSelectBar data={area} setGu={setGu} />
      </RegisterSelectBox>
      {isFormValid ? (
        <ErrorBox visible="visible" top="640px" color="#8ED0F4">
          {correctMessage}
        </ErrorBox>
      ) : (
        <ErrorBox visible="visible" top="640px" color="#ED1B24">
          {errorMessage}
        </ErrorBox>
      )}
      {!isFormValid ? (
        <ButtonStyle
          top="77px"
          color="rgba(141, 166, 187, 0.3)"
          bg="#e7edf2"
          onClick={handleSignUp}
        >
          가입(SignUp)
        </ButtonStyle>
      ) : (
        <ButtonStyle top="77px" onClick={handleSignUp}>
          가입(SignUp)
        </ButtonStyle>
      )}
    </Wrapper>
  );
}
