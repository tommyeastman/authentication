import React from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection } from './common';

const LogoutButton = () => {
    return(
        <Card>
            <CardSection>
                <Button>
                Logout
                </Button>
            </CardSection>
        </Card>
    );
}

export default LogoutButton;
