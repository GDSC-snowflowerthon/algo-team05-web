import { useState } from "react";
import PropTypes from "prop-types";
import { OriginStyledSelect } from "@/components/select/OriginSelectStyle";

export default function OriginCitySelectBar({ data, setCity }) {
  const options = data;
  const [selectOnline, setSelectOnline] = useState("");

  const handleSelectChange = (selectedOption) => {
    setSelectOnline(selectedOption);
    setCity(selectedOption);
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

OriginCitySelectBar.propTypes = {
  data: PropTypes.array, // or whatever type your 'data' should be
  setCity: PropTypes.func,
};
