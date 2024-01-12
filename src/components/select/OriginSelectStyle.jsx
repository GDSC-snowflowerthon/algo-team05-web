import styled from "styled-components";
import Select from "react-select";

export const OriginStyledSelect = styled(Select).attrs({
  classNamePrefix: "react-select",
})`
  .react-select__control {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #333d42;
    background: #f9faff;
    display: flex;
    text-align: center;
    cursor: pointer;
    margin-top: 12px;
    padding: 0px 10px 0 10px;
    font-size: 15px;
  }
  .react-select__single-value {
    text-align: left;
    color: #333d42; /* 텍스트 색상 지정 */
    font-size: 15px;
    font-weight: 500;
  }
  .react-select__menu {
    border-radius: 10px;
    border: 1px solid #333d42;
    background: #f9faff;
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
    color: #333d42; /* option 텍스트 색상 */
  }
  .react-select__option--is-selected {
    background-color: #F9FAFF /* 클릭된 option 배경색 */
    color: #333d42; /* 클릭된 option 텍스트 색상 */
  }
  .react-select__option--is-focused {
    border: 1px solid #50a1df;
    color: #333d42; /* hover 상태의 option 텍스트 색상 */
  }
  .react-select__placeholder {
    color: #333d42;
    font-weight: 600;
  }
  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator {
    color: #333d42;
  }
  .react-select__indicator--is-focused {
    color: #50a1df;
  }
  .react-select__indicator--is-selected {
    color: #50a1df;
  }
`;
