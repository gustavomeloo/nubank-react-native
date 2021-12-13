import styled from "styled-components";

export const Container = styled.View`

  height: 100px;
  margin-top : 20px;

`

//A scrollview tem duas formas de manipular o style dela, dentro(content) e fora como padrão mexendo na altura e espaçamento na parte de fora
//para manipular o content da scrollview adicione um ".attrs({})" 
//horizontal : scrollview gire horizontalmente
export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle : { paddingLeft : 10, paddingRight: 20},
  showsHorizontalScrollIndicator: false
})``

export const TabItem = styled.View`
  width : 100px;
  height : 100px;
  background : rgba(255, 255, 255, 0.2);
  border-radius : 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color : #FFF;

`;