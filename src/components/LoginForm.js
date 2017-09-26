import React from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends React.Component {
    state = { text: ' '};

    render() {
        return (
            <Card>
                <CardSection />
                    <TextInput 
                    value = {this.state.text}
                    onChangeText={text => this.setState({ text })}
                    />
                <CardSection />
                    <TextInput />
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
