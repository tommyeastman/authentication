import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator animating={props.spinnerShow}/>
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Spinner };