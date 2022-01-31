import React, { useRef, useState } from 'react';
import {
    ActivityIndicator,
    ActivityIndicatorBase,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import useAuthentication from '../hooks/useAuthentication';
import BackgroundImage from '../assets/Image.jpg';
import { backgroundColorCard, BLACK, ERROR } from '../const/COLORS';
import { PASSWORD, SING_IN, USER_SING_IN } from '../const/CONTENT/LogInContent';
import {
    FONT_XLARGE,
    FONT_XXLARGE,
    RADIUS_LARGE,
    RADIUS_SMALL,
    RADIUS_XSMALL,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    SPACE_MEDIUM,
    SPACE_SMALL,
    SPACE_XSMALL,
    SPACE_XXLARGE,
} from '../const/LAYOUT';

const LoginScreen = () => {
    const [userData, setUserData] = useState({
        username: null,
        password: null,
    });

    const passRef = useRef();
    const { logIn, isLoading, loginError, setLoginError } = useAuthentication();
    return (
        <View style={styles.contentWelcome}>
            <View style={styles.containerImage}>
                <Image style={styles.backgroundImage} source={BackgroundImage} />
            </View>
            <View>
                <Text style={styles.welcomeText}>Welcome to the STORE</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={text => {
                        setUserData({
                            ...userData,
                            username: text,
                        });
                        setLoginError(null);
                    }}
                    placeholder={USER_SING_IN}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onSubmitEditing={() => {
                        passRef.current.focus();
                    }}
                    returnKeyType="next"
                    blurOnSubmit={false}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => {
                        setUserData({
                            ...userData,
                            password: text,
                        });
                        setLoginError(null);
                    }}
                    placeholder={PASSWORD}
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry
                    ref={passRef}
                    onSubmitEditing={() => {
                        logIn(userData);
                    }}
                />
            </View>
            {!!loginError && (
                <View style={styles.errMsgBox}>
                    <Text>{loginError}</Text>
                </View>
            )}
            <Pressable
                onPress={() => {
                    logIn(userData);
                }}
                style={styles.singUp}>
                {isLoading ? (
                    <ActivityIndicator color={BLACK} />
                ) : (
                    <Text style={styles.singUpText}>{SING_IN}</Text>
                )}
            </Pressable>
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
    input: {
        width: SCREEN_WIDTH / 1.5,
        backgroundColor: backgroundColorCard,
        alignSelf: 'center',
        padding: 0,
        height: SPACE_XXLARGE,
        marginVertical: SPACE_SMALL,
        borderRadius: RADIUS_SMALL,
        textAlign: 'center',
    },
    errMsgBox: {
        backgroundColor: ERROR,
        alignSelf: 'center',
        paddingVertical: SPACE_XSMALL,
        paddingHorizontal: SPACE_MEDIUM,
        borderRadius: RADIUS_XSMALL,
    },
    singUp: {
        alignSelf: 'center',
        marginBottom: SPACE_XXLARGE,
        width: SCREEN_WIDTH / 3,
        borderRadius: RADIUS_LARGE,
        backgroundColor: backgroundColorCard,
        paddingVertical: SPACE_XSMALL,
    },
    singUpText: {
        fontSize: FONT_XLARGE,
        color: BLACK,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
