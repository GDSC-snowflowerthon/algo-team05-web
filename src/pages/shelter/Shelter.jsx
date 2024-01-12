import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  Title,
  Information,
  FlexRow,
  ShelterContent,
  ListBox,
  ScrollIcon,
  DetailTagBox,
  ShelterButtonStyle,
  ShelterTagBox,
} from "@/styles/styles";
import ShelterTag from "@/components/shelter/ShelterTag";
import DetailTag from "@/components/shelter/DetailTag";
import { shelters } from "@/data/Shelters";
import { getShelter } from "@/api/getShelter";
import { getAllShelter } from "@/api/getAllShelter";
import { seoulArea } from "@/data/SeoulArea";
import { shelterSelectCodes } from "@/data/ShelterSelectCode";
import { papagoData } from "@/data/PapagoData";
import Navigation from "@/components/Navigation";

export default function Shelter() {
  const cookie = localStorage.getItem("accessToken");

  const location = useLocation();
  const [data, setData] = useState(location.state.area || null);
  // console.log(data); // 지역을 받아옵니다.

  const [title, setTitle] = useState("대피소 검색");

  const [open, setOpen] = useState(false);

  const [detailTitle, setDetailTitle] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const [shelterList, setShelterList] = useState(shelters);

  const [lan, setLan] = useState("");
  const [user, setUser] = useState(false);

  // 프론트 더미 번역
  useEffect(() => {
    const language = localStorage.getItem("language");
    console.log(language);
    setLan(language);
  }, [user]);

  useEffect(() => {
    if (lan === "ko") {
      setTitle(papagoData.ko.대피소검색[0]);
    } else if (lan === "en") {
      setTitle(papagoData.en.대피소검색[0]);
    } else if (lan === "ja") {
      setTitle(papagoData.ja.대피소검색[0]);
    } else if (lan === "zh-CN") {
      setTitle(papagoData.zhCN.대피소검색[0]);
    } else if (lan === "zh-TW") {
      setTitle(papagoData.zhTW.대피소검색[0]);
    } else if (lan === "vi") {
      setTitle(papagoData.vi.대피소검색[0]);
    } else if (lan === "id") {
      setTitle(papagoData.id.대피소검색[0]);
    } else if (lan === "th") {
      setTitle(papagoData.th.대피소검색[0]);
    } else if (lan === "de") {
      setTitle(papagoData.de.대피소검색[0]);
    } else if (lan === "ru") {
      setTitle(papagoData.ru.대피소검색[0]);
    } else if (lan === "es") {
      setTitle(papagoData.es.대피소검색[0]);
    } else if (lan === "it") {
      setTitle(papagoData.it.대피소검색[0]);
    } else if (lan === "fr") {
      setTitle(papagoData.fr.대피소검색[0]);
    } else {
      setTitle(papagoData.en.대피소검색[0]);
    }
  }, [lan]);

  useEffect(() => {
    (async () => {
      try {
        setShelterList(await getAllShelter());
        //  console.log(shelterList[0].description, shelterList[0].address);
        // Do something with the translationData
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  }, []);

  const findAreaByValue = (value, data) => {
    const selectedArea = data.find((item) => item.label === value);
    return selectedArea.value || null; // return null if not found
  };

  const handleSearch = (keyword) => {
    // console.log("클릭");
    setData(keyword);

    const getCode = findAreaByValue(keyword, shelterSelectCodes);

    (async () => {
      try {
        setShelterList(await getShelter(getCode, cookie));
        //   console.log(shelterList);
        // Do something with the translationData
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  };

  /*
  // 번역 기능
  useEffect(() => {
    (async () => {
      try {
        const newData = await getTranslate(shelters);
        console.log(newData);
        // Do something with the translationData
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  }, [shelterList]);
  */

  // 주어진 배열을 사용하여 ShelterTag를 생성하는 함수
  const renderShelterTags = () => {
    return shelterList.map((shelter, index) => (
      <ShelterTag
        key={index} // React에서는 각 요소에 고유한 키를 제공하는 것이 좋습니다.
        title={shelter.description}
        address={shelter.address}
        setDetailTitle={setDetailTitle}
        setDetailAddress={setDetailAddress}
        setOpen={setOpen}
      />
    ));
  };

  return (
    <Wrapper>
      <Navigation setUser={setUser} user={user} />
      <FlexRow>
        <Title top="60px">{title}</Title>
        <Information />
      </FlexRow>
      <ShelterTagBox>
        {seoulArea.slice(1).map((area) => (
          <ShelterButtonStyle
            key={area.value}
            onClick={() => handleSearch(area.value)}
          >
            {area.value}
          </ShelterButtonStyle>
        ))}
      </ShelterTagBox>
      <ShelterContent>{data}</ShelterContent>
      <ListBox>{renderShelterTags()}</ListBox>
      <ScrollIcon />
      <DetailTagBox>
        {open ? (
          <DetailTag
            setOpen={setOpen}
            title={detailTitle}
            address={detailAddress}
          />
        ) : (
          <></>
        )}
      </DetailTagBox>
    </Wrapper>
  );
}
