import PropTypes from "prop-types";
import { StyledSelect } from "@/components/select/SelectStyle";

export default function GuSelectBar({ data, setGu, gu }) {
  const options = data;
  const firstValue = { value: "77", label: "선택" };

  const handleSelectChange = (selectedOption) => {
    setGu(selectedOption);
    // console.log("select: ", selectedOption);
  };

  return (
    <div>
      <StyledSelect
        options={options} //위에서 만든 배열을 select로 넣기
        onChange={handleSelectChange} //값이 바뀌면 setState되게
        defaultValue={firstValue}
      />
    </div>
  );
}

GuSelectBar.propTypes = {
  data: PropTypes.array, // or whatever type your 'data' should be
  setGu: PropTypes.func,
  gu: PropTypes.object,
};
