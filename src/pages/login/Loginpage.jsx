import { useState } from "react";
import {
  InputStyled,
  LText,
  Lttext,
  ButtonStyle,
  Ttitle,
  Wrapper,
  TextLeft,
  ErrorBox,
} from "../../styles/styles";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [correctMessage, setCorrectMessage] = useState("");

  const isFormValid = email !== "" && password !== "";

  const handleSignIn = async () => {
    if (isFormValid) {
      setCorrectMessage("로그인이 가능합니다.");
      try {
        const response = await fetch("http://3.39.62.158:8080/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          localStorage.setItem("accessToken", data.jwtAccessToken);
          //둘 다 저장해야하나요??
          localStorage.setItem("language", data.lan);
          // 로그인 성공
          console.log("로그인 성공");
          setErrorMessage(data.message || "로그인 성공");
          setTimeout(() => {
            navigate("/home");
          }, 500);
        } else if (response.status === 400) {
          const data = await response.json();
          setErrorMessage(data.message || "로그인 실패");
        } else {
          // 로그인 실패
          const data = await response.json();
          setErrorMessage(data.message || "로그인 실패");
        }
      } catch (error) {
        //console.error('로그인 중 오류 발생:', error);
        setErrorMessage("로그인 중 오류가 발생했습니다");
      }
    } else {
      setErrorMessage("이메일과 비밀번호를 모두 입력하세요.");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setPassword(value);
  };

  return (
    <Wrapper>
      <Ttitle>로그인</Ttitle>
      <LText>로그인시 00일동안 데이터가 저장됩니다.</LText>
      <TextLeft>
        <Lttext style={{ marginTop: "60px" }}>이메일(email)</Lttext>
      </TextLeft>
      <InputStyled
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="email"
      ></InputStyled>
      <TextLeft>
        <Lttext style={{ marginTop: "30px" }}>비밀번호(password)</Lttext>
      </TextLeft>
      <InputStyled
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="password"
      ></InputStyled>
      {isFormValid ? (
        <ErrorBox visible="visible" top="440px" color="#8ED0F4">
          {correctMessage}
        </ErrorBox>
      ) : (
        <ErrorBox visible="visible" top="440px" color="#ED1B24">
          {errorMessage}
        </ErrorBox>
      )}
      {!isFormValid ? (
        <ButtonStyle
          top="77px"
          color="rgba(141, 166, 187, 0.3)"
          bg="#e7edf2"
          onClick={handleSignIn}
        >
          로그인(SignIn)
        </ButtonStyle>
      ) : (
        <ButtonStyle top="77px" onClick={handleSignIn}>
          로그인(SignIn)
        </ButtonStyle>
      )}
    </Wrapper>
  );
}
