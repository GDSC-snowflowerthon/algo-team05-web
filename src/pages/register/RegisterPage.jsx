import { useState, useEffect} from "react"
import { Lttext, LText, StartButtonStyle, Ttitle, Wrapper, InputStyled, SelectStyled } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import {sejongDistricts, seoulDistricts, gyeonggiDistricts, gangwonDistricts, knDistricts, kbDistricts, icDistricts, busanDistricts, daejeonDistricts, dagueDistricts, ulsanDistricts, jejuDistricts, jnDistricts, jbDistricts, cnDistricts, cbDistricts, gwangjuDistricts} from '@/pages/register/data';
import {languageOptions, regionOptions} from '@/pages/register/data';

export default function RegisterPage() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [language, setLanguage] = useState('ko');
    const [city, setCity] = useState('seoul');
    const [gu, setGu] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [availableDistricts, setAvailableDistricts] = useState([]);

    useEffect(() => {
      if (city === "서울특별시") {
        setAvailableDistricts(seoulDistricts);
      } else if (city === "경기도") {
        setAvailableDistricts(gyeonggiDistricts);
      } 
      else if (city === "강원도") {
        setAvailableDistricts(gangwonDistricts);
      } 
      else if (city === "경상남도") {
        setAvailableDistricts(knDistricts);
      } 
      else if (city === "경상북도") {
        setAvailableDistricts(kbDistricts);
      } 
      else if (city === "인천광역시") {
        setAvailableDistricts(icDistricts);
      } 
      else if (city === "부산특별시") {
        setAvailableDistricts(busanDistricts);
      } 
      else if (city === "대구광역시") {
        setAvailableDistricts(dagueDistricts);
      } 
      else if (city === "대전광역시") {
        setAvailableDistricts(daejeonDistricts);
      } 
      else if (city === "울산광역시") {
        setAvailableDistricts(ulsanDistricts);
      } 
      else if (city === "세종시") {
        setAvailableDistricts(sejongDistricts);//세종 예외처리
      } 
      else if (city === "제주도") {
        setAvailableDistricts(jejuDistricts);
      } 
      else if (city === "전라남도") {
        setAvailableDistricts(jnDistricts);
      } 
      else if (city === "전라북도") {
        setAvailableDistricts(jbDistricts);
      } 
      else if (city === "충청남도") {
        setAvailableDistricts(cnDistricts);
      } 
      else if (city === "충청북도") {
        setAvailableDistricts(cbDistricts);
      } 
      else if (city === "광주광역시") {
        setAvailableDistricts(gwangjuDistricts);
      } 
      else {
        setAvailableDistricts([]);
      }
    }, [city]);

    const handleEmailChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setEmail(value);
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setPassword(value);
        //setPassword(e.target.value);
    };

    const handleLanguageChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setLanguage(value);
        //setLanguage(e.target.value);
    };

    const handleCityChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setCity(value);
        //setRegion(e.target.value);
    };

    const handleGuChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setGu(value);
        //setRegion(e.target.value);
  };

    const isFormValid = email !== '' && password !== '' && language !== '' && city !== '' && gu!=='';

    const handleSignUp = async () => {
        if (isFormValid) {
          try {
            const response = await fetch('http://3.39.62.158:8080/users/join', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                password,
                language,
                city,
                gu,
              }),
            });
    
            if (response.ok) {
              navigate("/");
              console.log("성공");
            } else { // 에러 처리
              const data = await response.json();
              setErrorMessage(data.message || '등록 실패');
            }
          } catch (error) {
            //console.error('등록 중 오류 발생:', error);
            setErrorMessage('등록 중 오류가 발생했습니다');
          }
        } else {
          setErrorMessage("모든 정보를 기입해주세요.");
          setTimeout(() => {
            setErrorMessage('');
          }, 2000);
        }
      };
    

    return (
        <Wrapper>
            <Ttitle style={{marginTop:'60px'}}>
                회원가입
            </Ttitle>
            <LText>
                희망 언어와 지역을 선택해주세요.
            </LText>
            <Lttext style={{marginTop:'60px', display : "flex", alignItems:'left'}}>
                이메일(email)
            </Lttext>
                <InputStyled type="email" value={email} onChange={handleEmailChange} placeholder="email"></InputStyled>
            <Lttext style={{marginTop:'30px'}}>
                비밀번호(password)
            </Lttext>
                <InputStyled type="password" value={password} onChange={handlePasswordChange} placeholder="password"></InputStyled>

            <Lttext style={{marginTop:'30px'}}>
                언어 선택(language)
            </Lttext>
            <SelectStyled value={language} onChange={handleLanguageChange}>
                {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectStyled>

            <Lttext>
                지역 선택(city)            
            </Lttext>
            <SelectStyled value={city} onChange={handleCityChange}>
              {regionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectStyled>

                <Lttext>시/구/군 선택(gu)</Lttext>
                <SelectStyled value={gu} onChange={handleGuChange}>
                  {availableDistricts.map((district) => (
                    <option key={district.value} value={district.label}>
                      {district.label}
                    </option>
                  ))}
                </SelectStyled>

            <div style={{ position: "absolute", top:'600px', opacity: errorMessage ? 1 : 0, height: errorMessage ? 'auto' : 0, overflow: 'hidden', transition: "opacity 0.5s, height 0.5s" }}>
                    <p style={{ color: "red" }}>{errorMessage}</p>
                </div>   
            <StartButtonStyle  style={{marginTop:'100px'}} onClick={handleSignUp}>
                가입(SignUp)
            </StartButtonStyle>
        </Wrapper>
    );
};

