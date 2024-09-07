import styled from "styled-components";
import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

export const CardDiv = styled.div`
  background-color: #f8e5e7;
  border-radius: 10px;
  padding: 20px;
  flex: 1 1 calc(33.333% - 20px);
  max-width: 300px;
  min-width: 250px;
  font-family: Arial, sans-serif;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

export const UpdateIcon = styled(HiPencilAlt)`
  font-size: 1.5rem;
`;

export const DeleteIcon = styled(MdDelete)`
  font-size: 1.5rem;
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
