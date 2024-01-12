import { useState, useEffect } from "react";
import styled from "styled-components";
import LocationImoge from "@/assets/images/shelter/location.svg";
import CallImoge from "@/assets/images/shelter/call.svg";
import Map from "@/components/map/Map";
import PropTypes from "prop-types";
import { papagoData } from "@/data/PapagoData";

export default function MapDetailTag({ location, user }) {
  const [show, setShow] = useState("이 지역 대피소 보러가기기");
  const [lan, setLan] = useState("");

  useEffect(() => {
    const language = localStorage.getItem("language");
    console.log(language);
    setLan(language);
  }, [user]);

  useEffect(() => {
    if (lan === "ko") {
      setShow(papagoData.ko.알아보기[0]);
    } else if (lan === "en") {
      setShow(papagoData.en.알아보기[0]);
    } else if (lan === "ja") {
      setShow(papagoData.ja.알아보기[0]);
    } else if (lan === "zh-CN") {
      setShow(papagoData.zhCN.알아보기[0]);
    } else if (lan === "zh-TW") {
      setShow(papagoData.zhTW.알아보기[0]);
    } else if (lan === "vi") {
      setShow(papagoData.vi.알아보기[0]);
    } else if (lan === "id") {
      setShow(papagoData.id.알아보기[0]);
    } else if (lan === "th") {
      setShow(papagoData.th.알아보기[0]);
    } else if (lan === "de") {
      setShow(papagoData.de.알아보기[0]);
    } else if (lan === "ru") {
      setShow(papagoData.ru.알아보기[0]);
    } else if (lan === "es") {
      setShow(papagoData.es.알아보기[0]);
    } else if (lan === "it") {
      setShow(papagoData.it.알아보기[0]);
    } else if (lan === "fr") {
      setShow(papagoData.fr.알아보기[0]);
    } else {
      setShow(papagoData.en.알아보기[0]);
    }
  }, [lan]);

  const onMoreInfoClick = () => {
    window.open(`https://map.kakao.com/link/search/${location}`);
  };

  return (
    <>
      <Map />
      <TagBox>
        <Title>{location}</Title>
        <MoreLearn onClick={onMoreInfoClick}>{show}</MoreLearn>
      </TagBox>
    </>
  );
}

MapDetailTag.propTypes = {
  location: PropTypes.string,
  user: PropTypes.bool,
};

export const TagBox = styled.div`
  position: relative;
  display: flex;
  width: 65%;
  flex-direction: column;
  padding: 20px 32px 30px 32px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
  align-items: center;
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
  margin-top: 10px;
  max-width: 80%;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  border-radius: 38px;
  background: #2f88a4;
  padding: 15px 20px 15px 20px;
  cursor: pointer;
`;
