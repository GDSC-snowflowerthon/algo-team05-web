import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Title, IntroText, ButtonStyle } from "@/styles/styles";
import styled from "styled-components";
import B_Map from "@/assets/images/map/beforemap.svg";
import Tag from "@/components/map/Tag";
import { areas } from "@/data/Area";
import Loading from "@/components/loading/Loading";
import { map_color } from "@/data/mapColor";

export default function SelectMap() {
  const navigate = useNavigate();

  const [area, setArea] = useState(null);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#F7F0D4");
  // 선택 확인용 state
  const [selectedTag, setSelectedTag] = useState(null);

  console.log("선택한 지역은 : ", area);

  // 데이터 전송 함수
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Navigate to the next route with both area and shelterList
      navigate(`/shelter-list`, { state: { area } });
    }, 1500);
  };

  /*
  // 번역 기능
  useEffect(() => {
    (async () => {
      try {
        const newData = await getTranslate(areas);
        console.log(newData);
        // Do something with the translationData
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  }, []);
  */

  useEffect(() => {
    if (area == areas[1].label) {
      setColor(map_color[0]);
    } else if (area == areas[2].label) {
      setColor(map_color[1]);
    } else if (area == areas[3].label) {
      setColor(map_color[2]);
    } else if (area == areas[4].label) {
      setColor(map_color[3]);
    } else if (area == areas[5].label) {
      setColor(map_color[4]);
    } else if (area == areas[6].label) {
      setColor(map_color[5]);
    } else if (area == areas[7].label) {
      setColor(map_color[6]);
    } else if (area == areas[8].label) {
      setColor(map_color[7]);
    } else if (area == areas[9].label) {
      setColor(map_color[8]);
    } else if (area == areas[10].label) {
      setColor(map_color[9]);
    } else if (area == areas[11].label) {
      setColor(map_color[10]);
    } else if (area == areas[12].label) {
      setColor(map_color[11]);
    } else if (area == areas[13].label) {
      setColor(map_color[12]);
    } else if (area == areas[14].label) {
      setColor(map_color[13]);
    } else if (area == areas[15].label) {
      setColor(map_color[14]);
    } else if (area == areas[16].label) {
      setColor(map_color[15]);
    } else if (area == areas[17].label) {
      setColor(map_color[16]);
    }

    setSelectedTag(area);
  }, [area]);

  // 자식 컴포넌트 Map으로 함수를 전달하여 자식 컴포넌트의 값을 부모 컴포넌트로 가져온다.
  return (
    <Wrapper>
      <Title top="60px">대한민국</Title>
      <BeforeMap>
        <Tag
          top="75px"
          left="122px"
          hover={color}
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[1].label}
        </Tag>
        <Tag
          top="100px"
          left="62px"
          hover={color}
          x="180"
          y="-120"
          r="135"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[2].label}
        </Tag>
        <Tag
          top="35px"
          left="140px"
          hover={color}
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[3].label}
        </Tag>

        <Tag
          top="60px"
          left="230px"
          hover={color}
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[4].label}
        </Tag>
        <Tag
          top="197px"
          left="138px"
          hover={color}
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[5].label}
        </Tag>
        <Tag
          top="213px"
          left="180px"
          hover={color}
          x="-260"
          y="-100"
          r="-135"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[6].label}
        </Tag>
        <Tag
          top="165px"
          left="55px"
          hover={color}
          x="-20"
          y="0"
          r="-185"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[7].label}
        </Tag>
        <Tag
          top="150px"
          left="155px"
          hover={color}
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[8].label}
        </Tag>
        <Tag
          top="180px"
          left="265px"
          hover={color}
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[9].label}
        </Tag>
        <Tag
          top="305px"
          left="185px"
          hover={color}
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[10].label}
        </Tag>
        <Tag
          top="252px"
          left="263px"
          hover={color}
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[11].label}
        </Tag>
        <Tag
          top="295px"
          left="319px"
          hover={color}
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[12].label}
        </Tag>
        <Tag
          top="335px"
          left="292px"
          hover={color}
          x="0"
          y="0"
          r="-185"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[13].label}
        </Tag>
        <Tag
          top="265px"
          left="114px"
          hover={color}
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[14].label}
        </Tag>
        <Tag
          top="335px"
          left="64px"
          hover={color}
          x="-20"
          y="0"
          r="-185"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[15].label}
        </Tag>
        <Tag
          top="375px"
          left="140px"
          hover={color}
          x="-260"
          y="-550"
          r="-45"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[16].label}
        </Tag>
        <Tag
          top="485px"
          left="95px"
          hover={color}
          x="-50"
          y="0"
          r="-180"
          setArea={setArea}
          selectedArea={selectedTag}
        >
          {areas[17].label}
        </Tag>
      </BeforeMap>
      <IntroText>{!area ? "지역을 선택해주세요." : area}</IntroText>
      {!area ? (
        <ButtonStyle
          top="14px"
          onClick={handleSubmit}
          color="rgba(141, 166, 187, 0.3)"
          bg="#e7edf2"
        >
          선택 완료
        </ButtonStyle>
      ) : (
        <ButtonStyle top="14px" onClick={handleSubmit}>
          선택 완료
        </ButtonStyle>
      )}
      {loading && <Loading />}
    </Wrapper>
  );
}

export const BeforeMap = styled.div`
  position: relative;
  top: 20px;
  width: 390px;
  height: 552px;
  background-repeat: no-repeat;
  background: url(${B_Map});
`;
