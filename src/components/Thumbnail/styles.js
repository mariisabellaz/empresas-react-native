import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  
  border-radius: ${RFValue(25)}px;
  background-color: black;
`;

