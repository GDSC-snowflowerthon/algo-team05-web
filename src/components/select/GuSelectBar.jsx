import { useState } from "react";
import PropTypes from "prop-types";
import { StyledSelect } from "@/components/select/SelectStyle";

export default function GuSelectBar({ data, setGu }) {
  const options = data;
  const [selectOnline, setSelectOnline] = useState(options[0]);
  setGu(selectOnline);
  console.log("select: ", selectOnline);
  // setSelectOnline(selectedData);
  //안에 들어가는 값을 받아야해서 state사용

  return (
    <div>
      <StyledSelect
        options={options} //위에서 만든 배열을 select로 넣기
        onChange={setSelectOnline} //값이 바뀌면 setState되게
        defaultValue={selectOnline}
      />
    </div>
  );
}

GuSelectBar.propTypes = {
  data: PropTypes.array, // or whatever type your 'data' should be
  setGu: PropTypes.func,
};
