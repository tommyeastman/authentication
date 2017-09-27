import React from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
    state = { text: ' ' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="username"
                        valuePassed={this.state.text}
                        onChangeTextPassed={text => this.setState({ text })}
                    />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
