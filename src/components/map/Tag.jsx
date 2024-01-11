import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Tags = styled.button`
  position: absolute;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  padding: 5px;
  border-radius: 15px;
  background-color: #fff;
  font-size: 8px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  z-index: 100;

  &:hover {
    : 2px solid "#F7F0D4";
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(${(props) => props.x || 0}%)
    translateY(${(props) => props.y || 0}%)
    rotate(${(props) => props.r || 0}deg);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #333d42;
  margin-top: ${(props) => props.top || "3px"};
  cursor: pointer;
`;

export default function Tag({
  top,
  left,
  hover,
  children,
  x,
  y,
  r,
  setArea,
  selectedArea,
}) {
  const handleSelect = () => {
    setArea(children);
  };
  console.log("c: ", children);
  console.log("s: ", selectedArea);

  // clicke 시 "clicked" class를 추가하여 미리 정의한 clicked 이벤트를 활성화한다.
  return (
    <Tags
      top={top}
      left={left}
      onClick={handleSelect}
      style={{
        backgroundColor: children === selectedArea ? hover : "transparent", // 클릭된 경우에 특정 스타일 부여
        color: children === selectedArea ? "#f9faff" : "#333d42",
        boxShadow: "0 0 5px rgba(52, 152, 219, 0.5)",
      }}
    >
      {children}
      <Arrow x={x} y={y} r={r} />
    </Tags>
  );
}

Tag.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  hover: PropTypes.string,
  children: PropTypes.node,
  x: PropTypes.string,
  y: PropTypes.string,
  r: PropTypes.string,
  clicked: PropTypes.bool,
  setArea: PropTypes.func.isRequired,
  selectedArea: PropTypes.func.string,
};
