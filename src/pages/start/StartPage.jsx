import { useEffect } from "react";
import {
  Main,
  Main_2,
  Main_3,
  ButtonStyle,
  Wrapper,
} from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/images/start/logo.svg";

export default function StartPage() {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  };

  const goRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    const logoElement = document.querySelector(".icon");
    const mainElement = document.querySelector(".Main");
    const main2Element = document.querySelector(".Main2");
    const main3Element = document.querySelector(".Main3");

    if (logoElement && mainElement && main2Element && main3Element) {
      logoElement.style.transition = "opacity 1s";
      logoElement.style.opacity = 1;
      mainElement.style.transition = "opacity 1s";
      mainElement.style.opacity = 1;
      main2Element.style.transition = "opacity 1s";
      main2Element.style.opacity = 1;
      main3Element.style.transition = "opacity 1s";
      main3Element.style.opacity = 1;
    }
  }, []);

  return (
    <Wrapper>
      <img
        style={{ marginTop: "160px", opacity: 0 }}
        src={Logo}
        alt="Logo Icon"
        className="icon"
      />
      <Main className="Main">
        AL-Go
        <Main_2 className="Main2">Alert Global</Main_2>
      </Main>
      <Main_3 className="Main3">세계인을 위한 재난문자 안내 서비스</Main_3>
      <ButtonStyle onClick={goLogin}>로그인 (Signin)</ButtonStyle>
      <ButtonStyle
        onClick={goRegister}
        style={{
          backgroundColor: "#F9FAFF",
          color: "#8DA6BB",
          marginTop: "20px",
        }}
      >
        회원가입 (SignUp)
      </ButtonStyle>
    </Wrapper>
  );
}
