import React, { useRef, useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import useAuthentication from '../hooks/useAuthentication';
import BackgroundImage from '../assets/Image.jpg';
import { backgroundColorCard, BLACK, ERROR } from '../const/COLORS';
import {
    PASSWORD, SIGN_IN, USER_SIGN_IN, WELCOME_TITLE,
} from '../const/CONTENT/LogInContent';
import {
    FONT_LARGE,
    FONT_XXLARGE,
    RADIUS_XSMALL,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    SPACE_LARGE,
    SPACE_MEDIUM,
    SPACE_XSMALL,
    SPACE_XXLARGE,
} from '../const/LAYOUT';
import ActionButton from '../components/ActionButton';
import LogInInput from '../components/LogInInput';

const LoginScreen = () => {
    const [userData, setUserData] = useState({
        username: null,
        password: null,
    });
    const passRef = useRef();
    const {
        logIn, isLoading, loginError, setLoginError,
    } = useAuthentication();
    return (
        <View style={styles.contentWelcome}>
            <View style={styles.containerImage}>
                <Image style={styles.backgroundImage} source={BackgroundImage} />
            </View>
            <View>
                <Text style={styles.welcomeText}>{WELCOME_TITLE}</Text>
            </View>
            <View>
                <LogInInput
                    onChangeText={(text) => {
                        setUserData((prevUserData) => ({
                            ...prevUserData,
                            username: text,
                        }));
                        setLoginError(null);
                    }}
                    autoCapitalize="none"
                    placeholder={USER_SIGN_IN}
                    keyboardType="email-address"
                    onSubmitEditing={() => {
                        passRef.current.focus();
                    }}
                    returnKeyType="next"
                    blurOnSubmit={false}
                />
                <LogInInput
                    inputRef={passRef}
                    onChangeText={(text) => {
                        setUserData((prevUserData) => ({
                            ...prevUserData,
                            password: text,
                        }));
                        setLoginError(null);
                    }}
                    placeholder={PASSWORD}
                    secureTextEntry
                    onSubmitEditing={() => {
                        logIn(userData);
                    }}

                />
            </View>
            {!!loginError && (
                <View style={styles.errMsgBox}>
                    <Text style={styles.errMsg}>{loginError}</Text>
                </View>
            )}

            <ActionButton
                onPress={() => {
                    logIn(userData);
                }}
                isLoading={isLoading}
                title={SIGN_IN}
                style={styles.button}
            />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    contentWelcome: {
        flex: 1,
        justifyContent: 'space-between',
    },
    containerImage: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        position: 'absolute',
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: FONT_XXLARGE,
        color: BLACK,
        backgroundColor: backgroundColorCard,
        marginTop: SPACE_XXLARGE,
    },
    errMsgBox: {
        backgroundColor: ERROR,
        alignSelf: 'center',
        paddingVertical: SPACE_XSMALL,
        paddingHorizontal: SPACE_MEDIUM,
        borderRadius: RADIUS_XSMALL,
    },
    errMsg: {
        fontSize: FONT_LARGE,
        color: BLACK,
        textAlign: 'center',
    },

    button: {
        marginHorizontal: SPACE_LARGE,
    },
});
