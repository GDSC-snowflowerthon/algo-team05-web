import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  // input 입력 값 변환 함수
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = (keyword) => {};

  return (
    <Wrapper>
      <FlexRow>
        <Title top="60px">대피소 검색</Title>
        <Information />
      </FlexRow>
      <SearchBox>
        <SearchInput type="text" value={text} onChange={handleChange} />
        <SearchIconBox>
          <SearchIcon onClick={handleSearch(text)} />
        </SearchIconBox>
      </SearchBox>
      <ShelterContent>서울 전체</ShelterContent>
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
