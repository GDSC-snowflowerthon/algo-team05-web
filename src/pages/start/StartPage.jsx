import {
  HomeButtonStyle,
  Wrapper,
  HomeLogo,
  ServiceTitle,
  ServiceContent,
  ServiceInform,
} from "@/styles/styles";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate("/login");
  };

  const goRegister = () => {
    navigate("/register");
  };

  return (
    <Wrapper>
      <HomeLogo />
      <ServiceTitle>AL-Go</ServiceTitle>
      <ServiceContent>Alert Global</ServiceContent>
      <ServiceInform>세계인을 위한 재난문자 안내 서비스</ServiceInform>
      <HomeButtonStyle top="68px" onClick={goLogin}>
        로그인 (Signin)
      </HomeButtonStyle>
      <HomeButtonStyle
        onClick={goRegister}
        bg="#F9FAFF"
        color="#8DA6BB"
        top="20px"
      >
        회원가입 (SignUp)
      </HomeButtonStyle>
    </Wrapper>
  );
}
