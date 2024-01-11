import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  Title,
  Information,
  FlexRow,
  SearchBox,
  SearchInput,
  SearchIconBox,
  SearchIcon,
  ShelterContent,
  ListBox,
  ScrollIcon,
  DetailTagBox,
} from "@/styles/styles";
import ShelterTag from "@/components/shelter/ShelterTag";
import DetailTag from "@/components/shelter/DetailTag";
import { shelters } from "@/data/Shelters";
import { getTranslate } from "@/api/getTranslate";
import { getShelter } from "@/api/getShelter";

export default function Shelter() {
  const location = useLocation();
  const [data, setData] = useState(location.state.area || null);
  console.log(data); // 지역을 받아옵니다.

  const [title, setTitle] = useState("대피소 검색");

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const [detailTitle, setDetailTitle] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const [shelterList, setShelterList] = useState(shelters);

  // input 입력 값 변환 함수
  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    (async () => {
      try {
        setShelterList(await getShelter(1147000000));
        //  console.log(shelterList[0].description, shelterList[0].address);
        // Do something with the translationData
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  }, []);

  const handleSearch = (keyword) => {
    console.log("클릭");
    setData(keyword);

    (async () => {
      try {
        setShelterList(await getShelter(keyword));
        console.log(shelterList);
        // Do something with the translationData
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    })();
  };

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
      <FlexRow>
        <Title top="60px">{title}</Title>
        <Information />
      </FlexRow>
      <SearchBox>
        <SearchInput type="text" value={text} onChange={handleChange} />
        <SearchIconBox>
          <SearchIcon onClick={() => handleSearch("1147000000")} />
        </SearchIconBox>
      </SearchBox>
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
