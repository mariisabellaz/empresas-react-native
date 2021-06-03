import styled from "styled-components/native";
import {TextInput} from "react-native";

export const Input = styled(TextInput)`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  text-align: left;
  
  width: 100%;
  padding: 18px 16px;
  
  background-color: ${({theme}) => theme.colors.input};
  border-radius: 5px;
  margin-bottom: 12px;
`;




