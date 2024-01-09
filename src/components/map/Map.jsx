import styled from "styled-components";
import B_Map from "@/assets/images/map/beforemap.svg";

export const BeforeMap = styled.div`
  position: relative;
  top: 20px;
  width: 390px;
  height: 552px;
  background-repeat: no-repeat;
  background: url(${B_Map});
`;

/*
export const SeoulTag = styled.div`
  position: absolute;
  top: 245px;
  left: 133px;
  width: 50px;
  height: 31px;
  background-repeat: no-repeat;
  background: url(${SeoulText});
`; */

export const Tags = styled.button`
  position: absolute;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  padding: 5px;
  border: 1px solid #333d42;
  border-radius: 15px;
  background-color: #fff;
  font-size: 8px;
  color: #333d42;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  z-index: 500;

  &:hover {
    outline: 2px solid ${(props) => props.hover || "#3498db"};
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(${(props) => props.x || 0}%)
    translateY(${(props) => props.y || 0}%)
    rotate(${(props) => props.r || 0}deg);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #333d42;
  margin-top: ${(props) => props.top || "3px"};
  cursor: pointer;
`;

export default function Map() {
  return (
    <>
      <BeforeMap>
        <Tags top="75px" left="122px" hover="#D6566F">
          Seoul
          <Arrow x="-50" y="0" r="-180" />
        </Tags>
        <Tags top="100px" left="62px" hover="#A3C370">
          Incheon
          <Arrow x="180" y="-120" r="135" />
        </Tags>
        <Tags top="35px" left="140px" hover="#EC8189">
          Gyeonggi-do
          <Arrow x="-50" y="0" r="-180" />
        </Tags>
        <Tags top="60px" left="230px" hover="#7CBC27">
          Gangwon-do
          <Arrow x="-50" y="0" r="-180" />
        </Tags>
        <Tags top="197px" left="138px" hover="#297750">
          Sejong
          <Arrow x="-50" y="0" r="-180" />
        </Tags>
        <Tags top="213px" left="180px" hover="#378BAF">
          Daejeon
          <Arrow x="-260" y="-100" r="-135" />
        </Tags>
        <Tags top="165px" left="55px" hover="#4DB787">
          Chungcheongnam-do
          <Arrow x="-20" y="0" r="-185" />
        </Tags>
        <Tags top="150px" left="155px" hover="#7BC087">
          Chungcheongbuk-do
          <Arrow x="-50" y="0" r="-180" />
        </Tags>
        <Tags top="180px" left="265px" hover="#378BAF">
          Gyeongsangbuk-do
          <Arrow x="-50" y="0" r="-180" />
        </Tags>
        <Tags top="305px" left="185px" hover="#C7D925">
          Gyeongsangnam-do
          <Arrow x="-50" y="0" r="-180" />
        </Tags>
        <Tags top="252px" left="263px" hover="#115D6B">
          Daegu
          <Arrow x="-50" y="0" r="-180" />
        </Tags>
        <Tags top="295px" left="319px" hover="#3067FE">
          Ulsan
          <Arrow x="-50" y="0" r="-180" />
        </Tags>
        <Tags top="335px" left="292px" hover="#AEBC1E">
          Busan
          <Arrow x="0" y="0" r="-185" />
        </Tags>
        <Tags top="265px" left="114px" hover="#EDBA23">
          Jeollabuk-do
          <Arrow x="-50" y="0" r="-180" />
        </Tags>
        <Tags top="335px" left="64px" hover="#F09053">
          Jeollanam-do
          <Arrow x="-20" y="0" r="-185" />
        </Tags>
        <Tags top="375px" left="140px" hover="#CE7942">
          Gwangju
          <Arrow x="-260" y="-550" r="-45" />
        </Tags>
        <Tags top="485px" left="95px" hover="#BC78B7">
          Jeju
          <Arrow x="-50" y="0" r="-180" />
        </Tags>
      </BeforeMap>
    </>
  );
}
