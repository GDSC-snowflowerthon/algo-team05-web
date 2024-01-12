import PropTypes from "prop-types";
import { StyledSelect } from "@/components/select/SelectStyle";

export default function LanguageSelectBar({ data, setLanguage, language }) {
  const options = data;
  const firstValue =
    language && language.value && language.label
      ? { value: language.value, label: language.label }
      : { value: "77", label: "선택" };

  const handleSelectChange = (selectedOption) => {
    setLanguage(selectedOption);
    //  console.log("select: ", selectedOption);
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

LanguageSelectBar.propTypes = {
  data: PropTypes.array, // or whatever type your 'data' should be
  setLanguage: PropTypes.func,
  language: PropTypes.object,
};
