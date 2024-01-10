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
} from "@/styles/styles";
import ShelterTag from "@/components/shelter/ShelterTag";

export default function Shelter() {
  return (
    <Wrapper>
      <FlexRow>
        <Title top="60px">대피소 검색</Title>
        <Information />
      </FlexRow>
      <SearchBox>
        <SearchInput type="text" />
        <SearchIconBox>
          <SearchIcon />
        </SearchIconBox>
      </SearchBox>
      <ShelterContent>강서구 대피소</ShelterContent>
      <ListBox>
        <ShelterTag />
        <ShelterTag />
        <ShelterTag />
        <ShelterTag />
        <ShelterTag />
        <ShelterTag />
        <ShelterTag />
      </ListBox>
      <ScrollIcon />
    </Wrapper>
  );
}
