import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  
  border-radius: ${RFValue(30)}px;
  background-color: black;
`;

