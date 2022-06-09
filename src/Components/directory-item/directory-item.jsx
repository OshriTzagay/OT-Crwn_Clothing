import React from "react";
import {useNavigate} from 'react-router-dom';
import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles.jsx";
export default function DirectoryItem({ category }) {
  const navigate = useNavigate();
  const { title, imageUrl, id, route } = category;
  const NavigationHandler = ()=>{
    navigate(route);
  }
  return (
    <DirectoryItemContainer onClick={NavigationHandler} >
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}
