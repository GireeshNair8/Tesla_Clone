import React from 'react'
import styled from "styled-components";

function Footer() {
  return (
    <Menu>
        <a href="#">Tesla © 2023</a>
        <a href="#">Privacy & Legal</a>
        <a href="#">Vehicle Recalls</a>
        <a href="#">Contact</a>
        <a href="#">News</a>
        <a href="#">Get Updates</a>
        <a href="#">Locations</a>
    </Menu>
  )
}
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-size: 15px;
    font-weight: 400;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Footer