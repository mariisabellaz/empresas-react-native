import {RFValue} from "react-native-responsive-fontsize";

export default {
    colors: {
        primary: '#5A7BEF',
        secondary: '#24F0B6',
        header: '#1D1D27',
        background: '#FFFFFF',
        shape: '#676372',
        border: '#BDCADB',
        input: '#F5F5F5',
        text: {
            default: '#140F26',
            light: '#6C7B8A',
            helper: '#BDCADB',
            inverted: '#FFFFFF',
            error: '#B12340'
        },
        gradient: {
            primary: '#4048EF',
            secondary: '#5A7BEF'
        }
        /*secondary: '#FF872C',
        secondary_light: '#FED8B1',
        shape: '#FFFFFF',
        text: {
            shape: '#FFFFFF',
            text_dark: '#363F5F',
            default: '#969CB2',
            dark: '#000000',
            income: '#12A454',
            outcome: '#E83F5B',
        },
        background: '#F0F2F5',
        icon: {
            default: '#FF872C',
            inverted: '#363F5F',
            vector: '#000000',
            shape: '#FFFFFF',
            income: {
                default: '#12A454',
                background: 'rgba(18, 164, 84, 0.5)',
            },
            outcome: {
                default: '#E83F5B',
                background: 'rgba(232, 63, 91, 0.5)',
            },
            light: '#969CB2'
        },
        button: {
            text: '#FFFFFF',
            background: '#FF872C',
        },*/
    },

    fontFamily: {
        regular: 'Montserrat_400Regular',
        italic: 'Montserrat_400Regular_Italic',
        medium: 'Montserrat_500Medium',
        bold: 'Montserrat_600SemiBold',
    },

    fontsize: {
        title: RFValue(26),
        subtitle: RFValue(18),
        medium: RFValue(16),
        regular: RFValue(14),
        address: RFValue(12.8),
        helper: RFValue(12),
    }
}
