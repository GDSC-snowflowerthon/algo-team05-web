import { useNavigate } from "react-router-dom";
import { HomeButtonStyle, Wrapper } from "../../styles/styles";
import shelter from "@/assets/images/home/shelter.svg";
import record from "@/assets/images/home/record.svg";
import quiz from "@/assets/images/home/quiz.svg";

export default function Home() {
  // localStorage.getItem("accessToken");

  const navigate = useNavigate();

  const goToShelterPage = () => {
    navigate("/map");
  };

  const goToQuizPage = () => {
    navigate("/quiz");
  };

  const goToRecordPage = () => {
    navigate("/record");
  };

  return (
    <Wrapper>
      <img
        style={{ marginTop: "130px" }}
        src={shelter}
        alt="Shelter Icon"
        className="icon"
      />
      <HomeButtonStyle style={{ marginTop: "20px" }} onClick={goToShelterPage}>
        <span>대피소 확인</span>
      </HomeButtonStyle>

      <img
        style={{ marginTop: "50px" }}
        src={record}
        alt="Shelter Icon"
        className="icon"
      />
      <HomeButtonStyle onClick={goToRecordPage}>재난 문자 기록</HomeButtonStyle>

      <img
        style={{ marginTop: "50px" }}
        src={quiz}
        alt="Shelter Icon"
        className="icon"
      />
      <HomeButtonStyle onClick={goToQuizPage}>재난 키워드 퀴즈</HomeButtonStyle>
    </Wrapper>
  );
}
