import { useState } from "react";
import PropTypes from "prop-types";
import { OriginStyledSelect } from "@/components/select/OriginSelectStyle";

export default function OriginGuSelectBar({ data, setGu }) {
  const [selectOnline, setSelectOnline] = useState({
    value: "77",
    label: "선택해주세요",
  });

  // console.log("gu : ", data);
  const handleSelectChange = (selectedOption) => {
    setSelectOnline(selectedOption);
    setGu(selectedOption);
    // console.log("select: ", selectedOption);
  };

  return (
    <div>
      <OriginStyledSelect
        options={data} //위에서 만든 배열을 select로 넣기
        onChange={handleSelectChange} //값이 바뀌면 setState되게
        defaultValue={selectOnline}
      />
    </div>
  );
}

OriginGuSelectBar.propTypes = {
  data: PropTypes.array, // or whatever type your 'data' should be
  setGu: PropTypes.func,
};
