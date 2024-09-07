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

const CatalogCard = ({
  avatarSrc,
  name,
  description,
  quote,
  onEdit,
  onDelete,
}) => {
  return (
    <CardDiv>
      <Header>
        {avatarSrc && <Avatar src={avatarSrc} alt={`${name}'s image`} />}
        <UserInfo>
          <CharacterName>{name}</CharacterName>
          <Description>{description}</Description>
        </UserInfo>
      </Header>
      {quote && <Quote>{quote}</Quote>}
      <Footer>
        <Button onClick={onEdit}>
          <UpdateIcon />
        </Button>
        <Button onClick={onDelete}>
          <DeleteIcon />
        </Button>
      </Footer>
    </CardDiv>
  );
};

export default CatalogCard;
