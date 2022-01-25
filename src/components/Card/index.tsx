import React from "react";

import { Container, Label } from "./styles";

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
        <p>Fazer migração completa do servidor</p>
        <img
          src="https://api.uifaces.co/our-content/donated/n4Ngwvi7.jpg"
          alt="avatar logo"
        />
      </header>
    </Container>
  );
}

export default Card;
