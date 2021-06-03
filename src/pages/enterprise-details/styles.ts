import styled from "styled-components/native";
import {FlatList, StyleSheet} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {BorderlessButton} from "react-native-gesture-handler";
import { Fontisto } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Enterprise = styled.View`
  flex-direction: row;
  justify-content: space-between;
  
  margin: ${RFValue(15)}px 0;
`;

export const EnterpriseInfo = styled.View`
  justify-content: flex-start;
  padding-left: 24px;
`;

export const EnterpriseName = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${({theme}) => theme.fontsize.medium}px;

  text-align: left;
  margin-bottom: ${RFValue(5)}px;
`;

export const EnterpriseType = styled.Text`
  color: ${({theme}) => theme.colors.text.light};
  font-family: ${({theme}) => theme.fontFamily.italic};
  font-size: ${({theme}) => theme.fontsize.regular}px;

  text-align: left;
`;

export const Shape = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  
  width: ${RFValue(55)}px;
  height: ${RFValue(35)}px;
  
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  
  align-items: center;
  justify-content: center;
`;

export const PhoneButton = styled(BorderlessButton)``;

export const WhatsappIcon = styled(Fontisto)`
  color: ${({theme}) => theme.colors.text.inverted};
  font-size: ${RFValue(22)}px;
`;

export const Wrapper = styled.View`
  padding: 15px 24px 0;
`;


export const SharePrice = styled.Text`
  color: ${({theme}) => theme.colors.text.light};
  font-family: ${({theme}) => theme.fontFamily.italic};
  font-size: ${({theme}) => theme.fontsize.helper}px;

  text-align: left;
`;

export const EnterpriseSharePrice = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${({theme}) => theme.fontsize.medium}px;

  text-align: left;
`;

export const Details = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${({theme}) => theme.fontsize.regular}px;

  text-align: center;
  
  margin: ${RFValue(15)}px ;
`;

export const Addresses = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.italic};
  font-size: ${({theme}) => theme.fontsize.address}px;

  text-align: center;
`;

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.colors.text.default};
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${({theme}) => theme.fontsize.medium}px;

  text-align: left;
  margin: ${RFValue(20)}px 0 ${RFValue(15)}px;
`;
