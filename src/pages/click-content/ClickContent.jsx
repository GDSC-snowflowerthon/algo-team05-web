import { useState, useEffect } from "react";
import {
  Wrapper,
  Title,
  TitleBox,
  ContentBox,
  ContentForBox,
  ContentFor,
  Content,
  ButtonStyle,
  ScrollIcon,
  SlideContent,
} from "@/styles/styles";
import MapDetailTag from "@/components/click-content/MapDetailTag";
import ActionDetailTag from "@/components/click-content/ActionDetailTag";
import { IoWarningOutline } from "react-icons/io5";
import Navigation from "@/components/Navigation";
import { papagoData } from "@/data/PapagoData";
import { getMessageData } from "@/api/getMessage";

export default function ClickContent() {
  const cookie = localStorage.getItem("accessToken");

  const [openLocate, setOpenLocate] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [data, setData] = useState("");

  const [origin, setOrigin] = useState("원본 내용");
  const [trans, setTrans] = useState("번역된 내용");
  const [l, setL] = useState("위치 확인하기");
  const [a, setA] = useState("행동 강령 확인하기");
  const [slid, setSlid] = useState("슬라이드로 내용을 확인해보세요.");

  const [lan, setLan] = useState("");
  const [user, setUser] = useState(false);

  useEffect(() => {
    console.log("재난문자 받기");
    console.log(
      cookie ===
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0Iiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcwNTA4NjY2MiwiZXhwIjoxNzA1MzQ1ODYyfQ.W_aPzn6-th6ZZX8UZLhPT5lDUgs-cOtps7nYeXN0hhmRByR2VBpS8_sFoKSNhH9s7qq61QlJPvreGXsJOXFbFQ"
        ? "true"
        : "false"
    );
    (async () => {
      try {
        setData(await getMessageData(cookie));
        //  console.log(shelterList[0].description, shelterList[0].address);
        // Do something with the translationData
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  }, []);

  useEffect(() => {
    const language = localStorage.getItem("language");
    console.log(language);
    setLan(language);

    (async () => {
      try {
        setData(await getMessageData(cookie));
        //  console.log(shelterList[0].description, shelterList[0].address);
        // Do something with the translationData
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  }, [user]);

  useEffect(() => {
    if (lan === "ko") {
      setOrigin(papagoData.ko.원본[0]);
      setTrans(papagoData.ko.번역[0]);
      setL(papagoData.ko.위치확인[0]);
      setA(papagoData.ko.행동강령[0]);
      setSlid(papagoData.ko.슬라이드[0]);
    } else if (lan === "en") {
      setOrigin(papagoData.en.원본[0]);
      setTrans(papagoData.en.번역[0]);
      setL(papagoData.en.위치확인[0]);
      setA(papagoData.en.행동강령[0]);
      setSlid(papagoData.en.슬라이드[0]);
    } else if (lan === "ja") {
      setOrigin(papagoData.ja.원본[0]);
      setTrans(papagoData.ja.번역[0]);
      setL(papagoData.ja.위치확인[0]);
      setA(papagoData.ja.행동강령[0]);
      setSlid(papagoData.ja.슬라이드[0]);
    } else if (lan === "zh-CN") {
      setOrigin(papagoData.zhCN.원본[0]);
      setTrans(papagoData.zhCN.번역[0]);
      setL(papagoData.zhCN.위치확인[0]);
      setA(papagoData.zhCN.행동강령[0]);
      setSlid(papagoData.zhCN.슬라이드[0]);
    } else if (lan === "zh-TW") {
      setOrigin(papagoData.zhTW.원본[0]);
      setTrans(papagoData.zhTW.번역[0]);
      setL(papagoData.zhTW.위치확인[0]);
      setA(papagoData.zhTW.행동강령[0]);
      setSlid(papagoData.zhTW.슬라이드[0]);
    } else if (lan === "vi") {
      setOrigin(papagoData.vi.원본[0]);
      setTrans(papagoData.vi.번역[0]);
      setL(papagoData.vi.위치확인[0]);
      setA(papagoData.vi.행동강령[0]);
      setSlid(papagoData.vi.슬라이드[0]);
    } else if (lan === "id") {
      setOrigin(papagoData.id.원본[0]);
      setTrans(papagoData.id.번역[0]);
      setL(papagoData.id.위치확인[0]);
      setA(papagoData.id.행동강령[0]);
      setSlid(papagoData.id.슬라이드[0]);
    } else if (lan === "th") {
      setOrigin(papagoData.th.원본[0]);
      setTrans(papagoData.th.번역[0]);
      setL(papagoData.th.위치확인[0]);
      setA(papagoData.th.행동강령[0]);
      setSlid(papagoData.th.슬라이드[0]);
    } else if (lan === "de") {
      setOrigin(papagoData.de.원본[0]);
      setTrans(papagoData.de.번역[0]);
      setL(papagoData.de.위치확인[0]);
      setA(papagoData.de.행동강령[0]);
      setSlid(papagoData.de.슬라이드[0]);
    } else if (lan === "ru") {
      setOrigin(papagoData.ru.원본[0]);
      setTrans(papagoData.ru.번역[0]);
      setL(papagoData.ru.위치확인[0]);
      setA(papagoData.ru.행동강령[0]);
      setSlid(papagoData.ru.슬라이드[0]);
    } else if (lan === "es") {
      setOrigin(papagoData.es.원본[0]);
      setTrans(papagoData.es.번역[0]);
      setL(papagoData.es.위치확인[0]);
      setA(papagoData.es.행동강령[0]);
      setSlid(papagoData.es.슬라이드[0]);
    } else if (lan === "it") {
      setOrigin(papagoData.it.원본[0]);
      setTrans(papagoData.it.번역[0]);
      setL(papagoData.it.위치확인[0]);
      setA(papagoData.it.행동강령[0]);
      setSlid(papagoData.it.슬라이드[0]);
    } else if (lan === "fr") {
      setOrigin(papagoData.fr.원본[0]);
      setTrans(papagoData.fr.번역[0]);
      setL(papagoData.fr.위치확인[0]);
      setA(papagoData.fr.행동강령[0]);
      setSlid(papagoData.fr.슬라이드[0]);
    } else {
      setOrigin(papagoData.en.원본[0]);
      setTrans(papagoData.en.번역[0]);
      setL(papagoData.en.위치확인[0]);
      setA(papagoData.en.행동강령[0]);
      setSlid(papagoData.en.슬라이드[0]);
    }
  }, [lan]);

  /*
  // 번역 기능
  useEffect(() => {
    (async () => {
      try {
        const newData = await getTranslate();
        console.log(newData);
        // Do something with the translationData
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  }, []);
  */

  const handleLocation = () => {
    setOpenAction(false);
    setOpenLocate(true);
  };

  const handleAction = () => {
    setOpenLocate(false);
    setOpenAction(true);
  };

  return (
    <Wrapper>
      <Navigation setUser={setUser} user={user} />
      <TitleBox>
        <Title>
          <IoWarningOutline />
          {"{ "}
          {data.dsstr_SE_NM}
          {" }"}
          {"{ "}
          {data.rcv_AREA_NM}
          {"}"}
          <br />
          {data.creat_DT}
        </Title>
      </TitleBox>
      <ContentBox top="59px">
        <ContentForBox>
          <ContentFor>{origin}</ContentFor>
        </ContentForBox>
        <Content>{data.msg_CN}</Content>
      </ContentBox>
      <ContentBox top="39px">
        <ContentForBox>
          <ContentFor>{trans}</ContentFor>
        </ContentForBox>
        <Content>{data.trans_MSG_CN}</Content>
      </ContentBox>
      {!openLocate && !openAction ? (
        <>
          <ButtonStyle top="76px" onClick={handleLocation}>
            {l}
          </ButtonStyle>
          <ButtonStyle top="17px" bottom="70px" onClick={handleAction}>
            {a}
          </ButtonStyle>
        </>
      ) : (
        <>
          <SlideContent>{slid}</SlideContent>
          <ScrollIcon top="14px" />
          {openLocate ? (
            <>
              <MapDetailTag location={data.rcv_AREA_NM} user={user} />{" "}
              <ButtonStyle top="40px" bottom="70px" onClick={handleAction}>
                {a}
              </ButtonStyle>
            </>
          ) : null}
          {openAction ? (
            <>
              <ActionDetailTag user={user} />
              <ButtonStyle top="40px" bottom="70px" onClick={handleLocation}>
                {l}
              </ButtonStyle>
            </>
          ) : null}
        </>
      )}
    </Wrapper>
  );
}
