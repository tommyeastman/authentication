import React from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends React.Component {
    render() {
        return (
            <Card>
                <CardSection />
                    <TextInput>Username</TextInput>
                <CardSection />
                    <TextInput>Password</TextInput>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
