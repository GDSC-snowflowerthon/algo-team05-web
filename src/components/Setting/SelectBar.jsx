import styled from "styled-components";
import { useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

export default function SelectBar({ data }) {
  const options = data;
  const [selectOnline, setSelectOnline] = useState(options[0]);
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

const StyledSelect = styled(Select).attrs({
  classNamePrefix: "react-select",
})`
  .react-select__control {
    background-color: #8ed0f4;
    width: 100%;
    height: 40px;
    padding-right: 15px;
    border: none;
    border-radius: 20px;
    display: flex;
    text-align: center;
    cursor: pointer;
    margin-top: 12px;
    padding: 0px 10px 0 10px;
    font-size: 15px;
  }
  .react-select__single-value {
    color: #f9faff; /* 텍스트 색상 지정 */
    font-size: 15px;
    font-weight: 500;
  }
  .react-select__menu {
    border-radius: 15px;
    background: #8ed0f4;
    box-shadow: 4px 4px 6px 0px rgba(171, 194, 212, 0.6),
      -4px -4px 6px 0px rgba(255, 255, 255, 0.5);
    font-size: 15px;
    font-weight: 500;
    text-align: center;

    scrollbar-width: thin; /* Firefox */
    scrollbar-color: transparent transparent; /* Firefox */
    &::-webkit-scrollbar {
      width: 5px; /* WebKit */
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent; /* WebKit */
    }
  }
  .react-select__option {
    background-color: transparent; /* option 배경색 */
    color: #50a1df; /* option 텍스트 색상 */
  }
  .react-select__option--is-selected {
    background-color: #50a1df; /* 클릭된 option 배경색 */
    color: #8ed0f4; /* 클릭된 option 텍스트 색상 */
  }
  .react-select__option--is-focused {
    border: 1px solid #50a1df;
    color: #f9faff; /* hover 상태의 option 텍스트 색상 */
  }
  .react-select__placeholder {
    color: #f9faff;
    font-weight: 600;
  }
  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator {
    color: #50a1df;
  }
  .react-select__indicator--is-focused {
    color: #50a1df;
  }
  .react-select__indicator--is-selected {
    color: #50a1df;
  }
`;

SelectBar.propTypes = {
  data: PropTypes.array, // or whatever type your 'data' should be
};
