import styled from "styled-components";
import LocationImoge from "@/assets/images/shelter/location.svg";
import CallImoge from "@/assets/images/shelter/call.svg";
import CancelImoge from "@/assets/images/shelter/cancel.svg";
import ShelterMap from "@/components/shelter/ShelterMap";
import PropTypes from "prop-types";

export default function DetailTag({ setOpen, title, address }) {
  // 더 알아보기 클릭 시 해당 지도로 이동
  const onMoreInfoClick = () => {
    window.open(`https://map.kakao.com/link/search/${address}`);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <TagBox>
      <FlexRow>
        <ShelterMap />
        <TitleBox>
          <Cancel onClick={handleCancel} />
          <Title>{title}</Title>
          <MoreLearn onClick={onMoreInfoClick}>더 알아보기</MoreLearn>
        </TitleBox>
      </FlexRow>
      <FlexRow bottom="10px">
        <Location />
        <Content>{address}</Content>
      </FlexRow>
      <FlexRow>
        <Content></Content>
      </FlexRow>
    </TagBox>
  );
}

export const TagBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 32px 20px 32px;
  border-radius: 20px;
  background: #fff;
  border: 5px solid #f7f0d4;
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
  color: #f9faff;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  border-radius: 38.031px;
  background: #2f88a4;
  padding: 10px;
  cursor: pointer;
`;

export const Cancel = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
  background: url(${CancelImoge});
  background-repeat: no-repeat;
  cursor: pointer;
`;

DetailTag.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  setOpen: PropTypes.func.isRequired,
};
