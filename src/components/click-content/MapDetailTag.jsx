import styled from "styled-components";
import LocationImoge from "@/assets/images/shelter/location.svg";
import CallImoge from "@/assets/images/shelter/call.svg";
import Map from "@/components/map/Map";

export const TagBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 32px 30px 32px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => props.bottom || "0"};
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.div`
  color: #3e4958;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 15px;
  pointer-events: none;
`;

// pointer-events: none; : 글자 hover 이벤트 제거
export const Content = styled.div`
  color: #3e4958;
  font-size: 15px;
  font-weight: 400;
  pointer-events: none;
`;

export const Location = styled.div`
  width: 14px;
  height: 17px;
  background: url(${LocationImoge});
  background-repeat: no-repeat;
  margin-right: 5px;
`;

export const Call = styled.div`
  width: 14px;
  height: 17px;
  background: url(${CallImoge});
  background-repeat: no-repeat;
  margin-right: 5px;
`;

export const MoreLearn = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
  color: #f9faff;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  border-radius: 38.031px;
  background: #2f88a4;
  padding: 10px;
  max-width: 30%;
  cursor: pointer;
`;

export default function MapDetailTag() {
  return (
    <>
      <Map />
      <TagBox>
        <Title>노을 공원</Title>
        <FlexRow bottom="10px">
          <Location />
          <Content>서울특별시 강서구 화곡동 105-194</Content>
        </FlexRow>
        <FlexRow>
          <Call />
          <Content>010-0000-0000</Content>
        </FlexRow>
        <MoreLearn>더 알아보기</MoreLearn>
      </TagBox>
    </>
  );
}
