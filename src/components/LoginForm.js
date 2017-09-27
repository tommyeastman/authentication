import React from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
    state = { email: '', password: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholderPassed="user@gmail.com"
                        valuePassed={this.state.email}
                        onChangeTextPassed={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholderPassed="******"
                        securePassed
                        valuePassed={this.state.password}
                        onChangeTextPassed={password => this.setState({ password })}
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
