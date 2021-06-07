import styled from "styled-components/native";
import {getStatusBarHeight} from "react-native-iphone-x-helper";
import {RFValue} from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};

  padding-top: ${getStatusBarHeight()}px;
`;

export const Greetings = styled.View``;

export const Fields = styled.View``;

export const Form = styled.View`
  flex: 1;
  padding: 24px;

  justify-content: space-evenly;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.bold};
  font-size: ${({theme}) => theme.fontsize.title}px;

  text-align: left;
`;

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.subtitle}px;

  text-align: left;
  margin-top: 5px;
`;

export const Logo = styled.Image.attrs({
    resizeMode: "contain"
})`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  
  margin-left: ${RFValue(20)}px;

`;
