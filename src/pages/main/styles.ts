import styled from "styled-components/native";
import {FlatList, StyleSheet} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {getBottomSpace} from "react-native-iphone-x-helper";

import {EnterpriseListData} from '.'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const List = styled(
    FlatList as new () => FlatList<EnterpriseListData>)
    .attrs({
        showsVerticalScrollIndicator: false,
        contentContainerStyle: {
            paddingTop: 10,
            paddingBottom: getBottomSpace(),
            paddingHorizontal: 24,
        }
    })``;

export const Separator = styled.View`
  width: 100%;
  height: ${StyleSheet.hairlineWidth}px;
  background-color: ${({theme}) => theme.colors.border};
  
  margin: ${RFValue(10)}px 0;
`;
