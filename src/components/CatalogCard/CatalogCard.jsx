import React from "react";
import {
  CardDiv,
  Header,
  Avatar,
  UserInfo,
  CharacterName,
  Description,
  Quote,
  Footer,
  Button,
  UpdateIcon,
  DeleteIcon,
} from "./styles";

const CatalogCard = ({ avatarSrc, name, description, quote }) => {
  return (
    <CardDiv>
      <Header>
        <Avatar src={avatarSrc} alt={`${name}'s image`} />
        <UserInfo>
          <CharacterName>{name}</CharacterName>
          <Description>{description}</Description>
        </UserInfo>
      </Header>
      <Quote>{quote}</Quote>
      <Footer>
        <Button>
          {" "}
          <UpdateIcon />{" "}
        </Button>
        <Button>
          {" "}
          <DeleteIcon />{" "}
        </Button>
      </Footer>
    </CardDiv>
  );
};

export default CatalogCard;
