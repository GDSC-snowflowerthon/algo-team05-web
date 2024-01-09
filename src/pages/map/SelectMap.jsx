import { useState } from "react";
import { Wrapper, Title, IntroText, ButtonStyleNon } from "@/styles/styles";
import Map from "@/components/map/Map";

export default function SelectMap() {
  const [text, setText] = useState("지역을 선택해주세요.");
  return (
    <Wrapper>
      <Title top="60px">대한민국</Title>
      <Map />
      <IntroText>{text}</IntroText>
      <ButtonStyleNon top="14px">선택 완료</ButtonStyleNon>
    </Wrapper>
  );
}
