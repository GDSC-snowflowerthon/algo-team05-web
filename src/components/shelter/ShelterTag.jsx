import styled from "styled-components";
import ShelterImoge from "@/assets/images/shelter/shelter.svg";
import PropTypes from "prop-types";

export const ShelterBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 23px;
  max-width: 80%;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
  padding: 15px 20px 15px 20px;
  cursor: pointer;
`;

export const ShelterTitle = styled.div`
  color: #3e4958;
  font-size: 18px;
  font-weight: 700;
  pointer-events: none;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  gap: 12px;
`;

export const ShelterContent = styled.div`
  width: 230px;
  color: #3e4958;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
`;

export const ShelterIcon = styled.div`
  width: 28px;
  height: 28px;
  background: url(${ShelterImoge});
  background-repeat: no-repeat;
`;

export default function ShelterTag() {
  return (
    <ShelterBox>
      <ShelterTitle>노을 공원</ShelterTitle>
      <FlexRow>
        <ShelterIcon />
        <ShelterContent>서울특별시 강서구 화곡동 105-194</ShelterContent>
      </FlexRow>
    </ShelterBox>
  );
}
