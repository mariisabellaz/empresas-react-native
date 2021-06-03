import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  justify-content: center;
`;

export const PhoneConnection = styled.Image.attrs({
    resizeMode: "contain"
})`
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;
  align-self: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${({theme}) => theme.fontsize.medium}px;

  text-align: center;
  margin-bottom: ${RFValue(15)}px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.text.light};
  font-family: ${({theme}) => theme.fontFamily.italic};
  font-size: ${({theme}) => theme.fontsize.regular}px;

  text-align: center;
`;

export const ButtonWrapper = styled.View`
  padding: 24px;
`;
