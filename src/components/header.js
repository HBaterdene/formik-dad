import React from "react";
import styled from "styled-components/macro";
export default function Header({ children, ...props }) {
  return <HeaderStyle>{children}</HeaderStyle>;
}
// export const HeaderElement = ({ children, activeClass }) => {
//   return (
//     <BtnElementStyle className={`${activeClass}`}>
//       {children}
//       <div />
//     </BtnElementStyle>
//   );
// };

const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
`;
export const HeaderElement = styled.button`
  cursor: pointer;
  width: 50%;
  border: 0;
  padding: 20px;
  background-color: #1a293b;
  color: ${({ active }) => (active ? "#2b5278" : "#babdc1")};
  font-size: 1.2rem;
  position: relative;
  transition: 0.7s all;
  &.active {
    color: #2b5278;
    div {
      background: #2b5278;
      bottom: -2px;
    }
  }
  div {
    position: absolute;
    transition: 0.2s all;
    left: 0;
    bottom: ${({ active }) => (active ? "-2px" : "0")};
    width: 100%;
    height: 2px;
    background: ${({ active }) => (active ? "#2b5278" : "inherit")};
  }
  &:hover {
    filter: brightness(1.75);
  }
  &:active {
    color: #2b5278;
    div {
      background: #2b5278;
      bottom: -2px;
    }
  }
`;
