import { useState } from "react";
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

export default function ClickContent() {
  const [openLocate, setOpenLocate] = useState(false);
  const [openAction, setOpenAction] = useState(false);

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
        <Content>
          강북구 ㅇㅇ교회에 화재 발생 인근 주민들은 대피해주시길 바랍니다.
        </Content>
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
