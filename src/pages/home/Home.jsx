import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyle, Wrapper } from "../../styles/styles";
import shelter from "@/assets/images/home/shelter.svg";
import record from "@/assets/images/home/record.svg";
import quiz from "@/assets/images/home/quiz.svg";
import { papagoData } from "@/data/PapagoData";
import Navigation from "@/components/Navigation";

export default function Home() {
  localStorage.getItem("accessToken");

  const [checkDapi, setCheckDapi] = useState("대피소 확인");
  const [reportMsg, setReportMsg] = useState("재난 문자 기록");
  const [quizMsg, setQuizMsg] = useState("재난 키워드 퀴즈");
  const [lan, setLan] = useState("");
  const [user, setUser] = useState(false);

  useEffect(() => {
    const language = localStorage.getItem("language");
    console.log(language);
    setLan(language);
  }, [user]);

  useEffect(() => {
    if (lan === "ko") {
      setCheckDapi(papagoData.ko.대피소확인[0]);
      setReportMsg(papagoData.ko.재난문자기록[0]);
      setQuizMsg(papagoData.ko.재난키워드퀴즈[0]);
    } else if (lan === "en") {
      setCheckDapi(papagoData.en.대피소확인[0]);
      setReportMsg(papagoData.en.재난문자기록[0]);
      setQuizMsg(papagoData.en.재난키워드퀴즈[0]);
    } else if (lan === "ja") {
      setCheckDapi(papagoData.ja.대피소확인[0]);
      setReportMsg(papagoData.ja.재난문자기록[0]);
      setQuizMsg(papagoData.ja.재난키워드퀴즈[0]);
    } else if (lan === "zh-CN") {
      setCheckDapi(papagoData.zhCN.대피소확인[0]);
      setReportMsg(papagoData.zhCN.재난문자기록[0]);
      setQuizMsg(papagoData.zhCN.재난키워드퀴즈[0]);
    } else if (lan === "zh-TW") {
      setCheckDapi(papagoData.zhTW.대피소확인[0]);
      setReportMsg(papagoData.zhTW.재난문자기록[0]);
      setQuizMsg(papagoData.zhTW.재난키워드퀴즈[0]);
    } else if (lan === "vi") {
      setCheckDapi(papagoData.vi.대피소확인[0]);
      setReportMsg(papagoData.vi.재난문자기록[0]);
      setQuizMsg(papagoData.vi.재난키워드퀴즈[0]);
    } else if (lan === "id") {
      setCheckDapi(papagoData.id.대피소확인[0]);
      setReportMsg(papagoData.id.재난문자기록[0]);
      setQuizMsg(papagoData.id.재난키워드퀴즈[0]);
    } else if (lan === "th") {
      setCheckDapi(papagoData.th.대피소확인[0]);
      setReportMsg(papagoData.th.재난문자기록[0]);
      setQuizMsg(papagoData.th.재난키워드퀴즈[0]);
    } else if (lan === "de") {
      setCheckDapi(papagoData.de.대피소확인[0]);
      setReportMsg(papagoData.de.재난문자기록[0]);
      setQuizMsg(papagoData.de.재난키워드퀴즈[0]);
    } else if (lan === "ru") {
      setCheckDapi(papagoData.ru.대피소확인[0]);
      setReportMsg(papagoData.ru.재난문자기록[0]);
      setQuizMsg(papagoData.ru.재난키워드퀴즈[0]);
    } else if (lan === "es") {
      setCheckDapi(papagoData.es.대피소확인[0]);
      setReportMsg(papagoData.es.재난문자기록[0]);
      setQuizMsg(papagoData.es.재난키워드퀴즈[0]);
    } else if (lan === "it") {
      setCheckDapi(papagoData.it.대피소확인[0]);
      setReportMsg(papagoData.it.재난문자기록[0]);
      setQuizMsg(papagoData.it.재난키워드퀴즈[0]);
    } else if (lan === "fr") {
      setCheckDapi(papagoData.fr.대피소확인[0]);
      setReportMsg(papagoData.fr.재난문자기록[0]);
      setQuizMsg(papagoData.fr.재난키워드퀴즈[0]);
    } else {
      setCheckDapi(papagoData.en.대피소확인[0]);
      setReportMsg(papagoData.en.재난문자기록[0]);
      setQuizMsg(papagoData.en.재난키워드퀴즈[0]);
    }
  }, [lan]);

  // console.log(papagoData.en.로그인[0]);

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
      <Navigation setUser={setUser} user={user} />
      <img
        style={{ marginTop: "130px" }}
        src={shelter}
        alt="Shelter Icon"
        className="icon"
      />
      <ButtonStyle style={{ marginTop: "20px" }} onClick={goToShelterPage}>
        <span>{checkDapi}</span>
      </ButtonStyle>

      <img
        style={{ marginTop: "50px" }}
        src={record}
        alt="Shelter Icon"
        className="icon"
      />
      <ButtonStyle style={{ marginTop: "20px" }} onClick={goToRecordPage}>
        {reportMsg}
      </ButtonStyle>

      <img
        style={{ marginTop: "50px" }}
        src={quiz}
        alt="Shelter Icon"
        className="icon"
      />
      <ButtonStyle style={{ marginTop: "20px" }} onClick={goToQuizPage}>
        {quizMsg}
      </ButtonStyle>
    </Wrapper>
  );
}
