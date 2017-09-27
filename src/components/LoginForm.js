import React from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {
    state = { email: '', password: '', error: '', spinnerShow: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '' });
        this.setState({ spinnerShow: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: "Authentication failed." })
                    })
            })
    }

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

                <Text style={styles.errorStyle}>{this.state.error}</Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>

                <CardSection>
                    <Spinner spinnerShow={this.state.spinnerShow}/>
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;
