import { useState } from "react";
import PropTypes from "prop-types";
import { StyledSelect } from "@/components/select/SelectStyle";

export default function CitySelectBar({ data, setCity, change, setChange }) {
  const [selectOnline, setSelectOnline] = useState({
    value: "77",
    label: "선택해주세요",
  });

  const handleSelectChange = (selectedOption) => {
    console.log("sss", selectedOption);
    setCity(selectedOption.label);
    setSelectOnline(selectOnline);
    setChange(!change);
    //  console.log("select: ", selectedOption);
  };

  return (
    <div>
      <StyledSelect
        options={data} //위에서 만든 배열을 select로 넣기
        onChange={handleSelectChange} //값이 바뀌면 setState되게
        defaultValue={selectOnline}
      />
    </div>
  );
}

CitySelectBar.propTypes = {
  data: PropTypes.array, // or whatever type your 'data' should be
  setCity: PropTypes.func,
  city: PropTypes.object,
  change: PropTypes.bool,
  setChange: PropTypes.func,
};
