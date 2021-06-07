import React from 'react';

import {Container, Enterprise, EnterpriseInfo, EnterpriseName, EnterpriseType, ArrowIcon} from './styles';
import {Thumbnail} from "../Thumbnail";

export function EnterpriseList({enterprise, onPress}) {
    return (
        <Container onPress={onPress}>
            <Enterprise>
                    <Thumbnail uri={'https://empresas.ioasys.com.br/' + enterprise.photo}/>
                    <EnterpriseInfo>
                        <EnterpriseName>{enterprise.enterprise_name}</EnterpriseName>
                        <EnterpriseType>{enterprise.enterprise_type.enterprise_type_name}</EnterpriseType>
                    </EnterpriseInfo>
            </Enterprise>
            <ArrowIcon name="right" />
        </Container>
    );
}
