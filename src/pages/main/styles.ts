import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fontFamily.regular};
`;
