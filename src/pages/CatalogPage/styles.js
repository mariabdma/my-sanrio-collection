import styled from "styled-components";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: auto;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  max-width: 15%;
  height: auto;
`;

export const LogoIcon = styled(MdOutlineCollectionsBookmark)`
  font-size: 2.5rem;
  margin: 16px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const AddIcon = styled(IoIosAdd)`
  font-size: 2.5rem;
  margin: 16px;
`;

export const Title = styled.div`
  font-family: "Playwrite HR", cursive;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  line-height: 1.35;
`;

export const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3%;
  gap: 20px;
  align-items: center;
`;
