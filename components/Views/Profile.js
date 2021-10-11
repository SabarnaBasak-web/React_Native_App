/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, Button, View, Alert, Switch, BackHandler, DrawerLayoutAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

function Profile({ navigation, route }) {
    // Switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(prevState => !prevState);
    };

    // BackHandler useEffect
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to go back?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );
        return () => backHandler.remove();
    }, []);

    const selector = useSelector(state => console.log(state));
    const dispatch = useDispatch();

    //   Two button Alert
    const twoButtonAlert = () => {
        Alert.alert(
            'Alert Title',
            'Alert Message',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Ok',
                    onPress: () => console.log('Ok Pressed'),
                },
            ]
        );
    };
    // Side drawer
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');

    const changeDrawerPosition = () => {
        if (drawerPosition === 'left') {
            setDrawerPosition('right');
        } else {
            setDrawerPosition('left');
        }
    };
    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <Button
                title="Close drawer"
                onPress={() => drawer.current.closeDrawer()}
            />
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.black}>This is {route.params.name}'s profile and she is learning React Native Components</Text>
            <Button onPress={twoButtonAlert} title="2 Button Alert" />
            <Text style={styles.black}> Switch </Text>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Text style={styles.text}>Click Back button!</Text>
            <Text style={styles.black}>Drawer Layout!</Text>
            <DrawerLayoutAndroid
                ref={drawer}
                drawerWidth={300}
                drawerPosition={drawerPosition}
                renderNavigationView={navigationView}>
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        Drawer on the {drawerPosition}!
                    </Text>
                    <Button
                        title="Change Drawer Position"
                        onPress={() => changeDrawerPosition()}
                    />
                    <Text style={styles.paragraph}>
                        Swipe from the side or press button below to see it!
                    </Text>
                    <Button
                        title="Open drawer"
                        onPress={() => drawer.current.openDrawer()}
                    />
                </View> 
            </DrawerLayoutAndroid>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    black: {
        color: '#212121',
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212121',
    },
    navigationContainer: {
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
        color: '#212121',
    },
});

export default Profile;
