import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import { AntDesign } from '@expo/vector-icons';
import {TouchableOpacity} from "react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Enterprise = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EnterpriseInfo = styled.View`
  margin-left: ${RFValue(15)}px;
  width: 75%;
`;

export const EnterpriseName = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${({theme}) => theme.fontsize.medium}px;
  
  text-align: left;
  text-transform: capitalize;
  
  margin-bottom: 5px;
`;

export const EnterpriseType = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.italic};
  font-size: ${({theme}) => theme.fontsize.helper}px;
  
  text-align: left;
`;

export const ArrowIcon = styled(AntDesign)`
  color: ${({theme}) => theme.colors.text.default};
  font-size: ${({theme}) => theme.fontsize.regular}px;
`;


