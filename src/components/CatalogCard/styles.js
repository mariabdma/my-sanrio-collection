import styled from "styled-components";
import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

export const UpdateIcon = styled(HiPencilAlt)`
  font-size: 1.5rem;
`;

export const DeleteIcon = styled(MdDelete)`
  font-size: 1.5rem;
`;

export const CardDiv = styled.div`
  background-color: #f8e5e7;
  border-radius: 10px;
  padding: 20px;
  max-width: 20%;
  font-family: Arial, sans-serif;
  color: #333;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;

export const UserInfo = styled.div`
  margin-left: 10px;
`;

export const CharacterName = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: #e2779c;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`;

export const Quote = styled.div`
  background-color: #fdd1d1;
  padding: 10px;
  border-radius: 15px;
  font-size: 0.85rem;
  margin-top: 10px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 15px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fdd1d1;
  }
`;

export const Footer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #ffe3ec;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;
