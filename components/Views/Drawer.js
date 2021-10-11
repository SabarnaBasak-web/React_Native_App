/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Drawer = React.forwardRef(({ props, ref }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
        },
        navigationContainer: {
            backgroundColor: '#ecf0f1',
        },
        paragraph: {
            padding: 16,
            fontSize: 15,
            textAlign: 'center',
        },
    });

    return (
        <View style={[styles.container, styles.navigationContainer]}>
            {props.children}
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <Button title="Close drawer" onPress={() => { ref.current.closeDrawer() }} />
        </View>
    );
});

export default Drawer;
