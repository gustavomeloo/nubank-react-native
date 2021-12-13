import React from "react";

import QRCode from "react-native-qrcode-svg";

import {Container, Code} from './styles.js';


export default function Menu() {
  return(
    <Container>

      <Code>
        <QRCode value="https://www.corinthians.com.br/" size={80} bgColor="#FFF" fgColor="#8B10AE"/>
      </Code>

    </Container>
  )
}