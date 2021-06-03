import React, {useState} from 'react';
import {Container, List, Separator} from './styles';

import {EnterpriseList} from "../../components";
import {EnterpriseProps} from "../../components/EnterpriseList";

export interface EnterpriseListData extends EnterpriseProps {
    id: string,
}

const Main = () => {
    const [enterprises] = useState<EnterpriseListData[]>([
        {
            id: '1',
            uri: 'http://afernandes.adv.br/wp-content/uploads/Team-Member-3.jpg',
            name: 'Ryan Ellis',
            type: 'Payment'
        },
        {
            id: '2',
            uri: 'http://afernandes.adv.br/wp-content/uploads/Team-Member-3.jpg',
            name: 'Ryan Ellis',
            type: 'Payment'
        },
        {
            id: '3',
            uri: 'http://afernandes.adv.br/wp-content/uploads/Team-Member-3.jpg',
            name: 'Ryan Ellis',
            type: 'Payment'
        }
    ]);

    return (
        <Container>
            <List
                data={enterprises}
                renderItem={({item}) => (<EnterpriseList enterprise={item} />)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <Separator/>}
            />

        </Container>
    );
};

export default Main;
