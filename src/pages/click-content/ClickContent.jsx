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
import { getTranslate } from "@/api/getTranslate";

export default function ClickContent() {
  const [openLocate, setOpenLocate] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [data, setData] = useState();

  const getMessageData = async () => {
    try {
      let response = await fetch(`http://3.39.62.158:8080/disaster/message`, {
        headers: {
          "X-ACCESS-TOKEN":
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmaXNoQG5hdmVyLmNvbSIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE3MDQ5NjgxNjIsImV4cCI6MTcwNTAwNDE2Mn0.eEEb5q8SKE_K5aShIpfo538JExPr6iDSh17KnFoRj4-GBSgRZPkhiTwLom98jPV8jNtp8YBXHe7oimVoyAKOzQ",
        },
      });

      if (response.ok) {
        // 여기에서 response.json() 또는 response.text()를 사용하여 데이터를 처리
        const data = await response.json();
        // setData(data);
      } else {
        // 오류 응답 처리
        console.error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
        {"화재"}
        {"강북구"}
        {"13:13"}
      </Title>
      <ContentBox top="59px">
        <ContentForBox>
          <ContentFor>원본 내용</ContentFor>
        </ContentForBox>
        <Content>
          강북구 ㅇㅇ교회에 화재 발생 인근 주민들은 대피해주시길 바랍니다.
        </Content>
      </ContentBox>
      <ContentBox top="39px">
        <ContentForBox>
          <ContentFor>번역된 내용</ContentFor>
        </ContentForBox>
        <Content></Content>
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
