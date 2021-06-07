import styled from "styled-components/native";
import {FlatList, StyleSheet} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {getBottomSpace} from "react-native-iphone-x-helper";
import {BorderlessButton} from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const SearchWrapper = styled.View`
  padding: 5px 12px 0;
`;

export const LoadingWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const List = styled(FlatList).attrs({
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

export const LogoutButton = styled(BorderlessButton)`
    padding-left:${RFValue(15)}px;
`;

export const LogoutIcon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;
