import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  
  margin-bottom: 10px;
`;

export const SocialIcon = styled.Image.attrs({
    resizeMode: "contain"
})`
  width: ${RFValue(28)}px;
  height: ${RFValue(28)}px;

  margin-right: 10px;
`;

export const SocialName = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fontFamily.italic};
  font-size: ${({theme}) => theme.fontsize.address}px;

  text-align: left;
`;

