import styled from "styled-components";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  height: auto;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const LogoIcon = styled(MdOutlineCollectionsBookmark)`
  font-size: 2.5rem;
  margin-right: 16px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const AddIcon = styled(IoIosAdd)`
  font-size: 2.5rem;
  cursor: pointer;
`;

export const Title = styled.div`
  font-family: "Playwrite HR", cursive;
  font-size: 1.5rem;
  line-height: 1.35;
`;

export const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  gap: 20px;
  justify-content: center;
`;

export const SuccessMessage = styled.div`
  color: green;
  padding: 10px;
  border: 1px solid green;
  background-color: #e6ffe6;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  border-radius: 5px;
`;

export const ErrorMessage = styled.div`
  color: red;
  padding: 10px;
  border: 1px solid red;
  background-color: #ffc7c7;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  border-radius: 5px;
`;
