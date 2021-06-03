import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {RectButton} from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(50)}px;
  
  margin: ${RFValue(15)}px 0;
`;

export const ButtonWrapper = styled(LinearGradient).attrs({
    colors: ['#4048EF', '#5A7BEF'],
    start:{x: 0, y: 1},
    end:{x: 1, y: 0}
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  
  border-radius: 8px;
`;

export const Label  = styled.Text`
  color: ${({theme}) => theme.colors.text.inverted};
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${({theme}) => theme.fontsize.regular}px;
  
  text-align: center;
  text-transform: uppercase;
`;
