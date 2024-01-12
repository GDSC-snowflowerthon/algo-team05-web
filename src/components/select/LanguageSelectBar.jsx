import { useState } from "react";
import PropTypes from "prop-types";
import { StyledSelect } from "@/components/select/SelectStyle";

export default function LanguageSelectBar({ data, setLanguage }) {
  const options = data;
  const [selectOnline, setSelectOnline] = useState({
    value: "77",
    label: "선택해주세요",
  });
  const handleSelectChange = (selectedOption) => {
    setSelectOnline(selectedOption);
    setLanguage(selectedOption.value);
    //  console.log("select: ", selectedOption);
  };

  return (
    <div>
      <StyledSelect
        options={options} //위에서 만든 배열을 select로 넣기
        onChange={handleSelectChange} //값이 바뀌면 setState되게
        defaultValue={selectOnline}
      />
    </div>
  );
}

LanguageSelectBar.propTypes = {
  data: PropTypes.array, // or whatever type your 'data' should be
  setLanguage: PropTypes.func,
};
