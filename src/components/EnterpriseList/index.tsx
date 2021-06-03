import React from 'react';
import {Container, Enterprise, EnterpriseInfo, EnterpriseName, EnterpriseType, ArrowIcon} from './styles';
import {Thumbnail} from "../../components";

export interface EnterpriseProps {
    uri: string,
    name: string,
    type: string
}

interface Props {
    enterprise: EnterpriseProps,
}

const EnterpriseList = ({enterprise, ...rest} : Props) => {
    return (
        <Container {...rest}>
            <Enterprise>

                    <Thumbnail uri={enterprise.uri}/>
                    <EnterpriseInfo>
                        <EnterpriseName>{enterprise.name}</EnterpriseName>
                        <EnterpriseType>{enterprise.type}</EnterpriseType>
                    </EnterpriseInfo>


            </Enterprise>
            <ArrowIcon name="right" />
        </Container>
    );
};

export default EnterpriseList;
