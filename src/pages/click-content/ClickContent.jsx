import { useState, useEffect } from "react";
import {
  Wrapper,
  Title,
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

export default function ClickContent() {
  const [openLocate, setOpenLocate] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [data, setData] = useState("");
  localStorage.getItem("accessToken");

  const getMessageData = async () => {
    try {
      let response = await fetch(`http://3.39.62.158:8080/disaster/message`, {
        headers: {
          "X-ACCESS-TOKEN":
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxQG5hdmVyLmNvbSIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE3MDQ5OTE1NjMsImV4cCI6MTcwNTAyNzU2M30.FI_NDd8NJjyTzcZlshK1rn28v0yWnhutvVpwOPo9SjP-l7t4c35U0adS3nb-eX8NF34k90dKfThn2gpventk9Q",
        },
      });

      if (response.ok) {
        // 여기에서 response.json() 또는 response.text()를 사용하여 데이터를 처리
        // console.log(response);
        const data = await response.json();
        //  console.log(data);
        setData(data);
      } else {
        // 오류 응답 처리
        console.error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  useEffect(() => {
    getMessageData();
  }, []);

  return (
    <Wrapper>
      <Title>
        <IoWarningOutline />
        {"{"}
        {data.dsstr_SE_NM}
        {"}"}
        {"{"}
        {data.rcv_AREA_NM}
        {"}"} <br />
        {data.creat_DT}
      </Title>
      <ContentBox top="59px">
        <ContentForBox>
          <ContentFor>원본 내용</ContentFor>
        </ContentForBox>
        <Content>{data.msg_CN}</Content>
      </ContentBox>
      <ContentBox top="39px">
        <ContentForBox>
          <ContentFor>번역된 내용</ContentFor>
        </ContentForBox>
        <Content>{data.trans_MSG_CN}</Content>
      </ContentBox>
      {!openLocate && !openAction ? (
        <>
          <ButtonStyle top="76px" onClick={handleLocation}>
            위치 확인하기
          </ButtonStyle>
          <ButtonStyle top="17px" onClick={handleAction}>
            행동 강령 확인하기
          </ButtonStyle>
        </>
      ) : (
        <>
          <SlideContent>슬라이드로 위치를 확인해보세요.</SlideContent>
          <ScrollIcon top="14px" />
          {openLocate ? (
            <>
              <MapDetailTag />{" "}
              <ButtonStyle top="40px" bottom="70px" onClick={handleAction}>
                행동 강령 확인하기
              </ButtonStyle>
            </>
          ) : null}
          {openAction ? (
            <>
              <ActionDetailTag />
              <ButtonStyle top="40px" bottom="70px" onClick={handleLocation}>
                위치 확인하기
              </ButtonStyle>
            </>
          ) : null}
        </>
      )}
    </Wrapper>
  );
}
