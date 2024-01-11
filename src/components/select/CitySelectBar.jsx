import PropTypes from "prop-types";
import { StyledSelect } from "@/components/select/SelectStyle";

export default function CitySelectBar({ data, setCity, city }) {
  const options = data;
  const firstValue =
    city && city.value && city.label
      ? { value: city.value, label: city.label }
      : { value: "77", label: "선택" };

  const handleSelectChange = (selectedOption) => {
    setCity(selectedOption);
    console.log("select: ", selectedOption);
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

CitySelectBar.propTypes = {
  data: PropTypes.array, // or whatever type your 'data' should be
  setCity: PropTypes.func,
  city: PropTypes.object,
};
