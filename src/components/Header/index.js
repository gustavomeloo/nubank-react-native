import React from "react";

import logo from '../../assets/Nubank_Logo.png';

import { Container, Top, Logo, Title } from './styles'

//link o react-native-vector-icons com o seu projeto
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Header() {
  return(
    <Container>

      <Top>
        <Logo source={logo} />
        <Title>Gustavo</Title>
      </Top>
      <Icon name='keyboard-arrow-down' size={20} color='#FFF' />

    </Container>
  )
}