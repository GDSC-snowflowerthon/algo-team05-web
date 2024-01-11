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

export default function Shelter() {
  const location = useLocation();
  const [data, setData] = useState(location.state || null);
  // console.log(data); // 지역을 받아옵니다.

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const getTranslate = async () => {
    try {
      let response = await fetch(`http://3.39.62.158:8080/papago/translate`, {
        method: "POST",
        headers: {
          "X-ACCESS-TOKEN":
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjYXRAbmF2ZXIuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcwNDkxMjM1MywiZXhwIjoxNzA0OTQ4MzUzfQ.t18T0b-BVDa372kHrGdRgT5WV_3DYist1CLzgqmPjltMn7PIoRSvuILjwkektEOfoAbiwTPdb6LrD7Z1Pt1ssQ",
        },
        body: JSON.stringify({
          prompt: "번역 테스트",
        }),
      });

      if (response.ok) {
        // 여기에서 response.json() 또는 response.text()를 사용하여 데이터를 처리
        const data = await response.json();
        console.log(data.prompt);
      } else {
        // 오류 응답 처리
        console.error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // input 입력 값 변환 함수
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = (keyword) => {
    console.log("클릭");
  };

  useEffect(() => {
    getTranslate();
  }, []);

  return (
    <Wrapper>
      <FlexRow>
        <Title top="60px">대피소 검색</Title>
        <Information />
      </FlexRow>
      <SearchBox>
        <SearchInput type="text" value={text} onChange={handleChange} />
        <SearchIconBox>
          <SearchIcon onClick={() => handleSearch(text)} />
        </SearchIconBox>
      </SearchBox>
      <ShelterContent>{data}</ShelterContent>
      <ListBox>
        <ShelterTag setOpen={setOpen} />
        <ShelterTag setOpen={setOpen} />
        <ShelterTag setOpen={setOpen} />
        <ShelterTag setOpen={setOpen} />
        <ShelterTag setOpen={setOpen} />
        <ShelterTag setOpen={setOpen} />
        <ShelterTag setOpen={setOpen} />
      </ListBox>
      <ScrollIcon />
      <DetailTagBox>
        {open ? <DetailTag setOpen={setOpen} /> : <></>}
      </DetailTagBox>
    </Wrapper>
  );
}
