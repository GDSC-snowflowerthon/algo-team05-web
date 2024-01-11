import { useState } from "react";
import PropTypes from "prop-types";
import { OriginStyledSelect } from "@/components/select/OriginSelectStyle";

export default function OriginGuSelectBar({ data, setGu }) {
  const options = data;
  const [selectOnline, setSelectOnline] = useState(options[0]);

  const handleSelectChange = (selectedOption) => {
    setSelectOnline(selectedOption);
    setGu(selectedOption);
    console.log("select: ", selectedOption);
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

OriginGuSelectBar.propTypes = {
  data: PropTypes.array, // or whatever type your 'data' should be
  setGu: PropTypes.func,
};
