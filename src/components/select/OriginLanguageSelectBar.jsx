import { useState } from "react";
import PropTypes from "prop-types";
import { OriginStyledSelect } from "@/components/select/OriginSelectStyle";

export default function OriginLanguageSelectBar({ data, setLanguage }) {
  const options = data;
  const [selectOnline, setSelectOnline] = useState({
    value: "77",
    label: "선택해주세요",
  });

  const handleSelectChange = (selectedOption) => {
    setSelectOnline(selectedOption);
    setLanguage(selectedOption);
    //  console.log("select: ", selectedOption);
  };

  return (
    <div>
      <OriginStyledSelect
        options={options} //위에서 만든 배열을 select로 넣기
        onChange={handleSelectChange} //값이 바뀌면 setState되게
        defaultValue={selectOnline}
      />
    </div>
  );
}

OriginLanguageSelectBar.propTypes = {
  data: PropTypes.array, // or whatever type your 'data' should be
  setLanguage: PropTypes.func,
};
