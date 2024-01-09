import {
  Wrapper,
  Title,
  ContentBox,
  ContentForBox,
  ContentFor,
  Content,
  ButtonStyle,
} from "@/styles/styles";

export default function ClickContent() {
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
      <ButtonStyle top="76px">위치 확인하기</ButtonStyle>
      <ButtonStyle top="17px">행동 강령 확인하기</ButtonStyle>
    </Wrapper>
  );
}
