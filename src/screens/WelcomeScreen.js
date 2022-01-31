import React from 'react';
import {
    Image, Pressable, StyleSheet, Text, View,
} from 'react-native';
import BackgroundImage from '../assets/Image.jpg';
import { backgroundColorCard, BLACK } from '../const/COLORS';
import { SING_IN } from '../const/CONTENT/LogInContent';
import {
    FONT_XLARGE,
    FONT_XXLARGE,
    RADIUS_LARGE,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    SPACE_XSMALL,
    SPACE_XXLARGE,
} from '../const/LAYOUT';

const WelcomeScreen = ({ navigation }) => (
    <View style={styles.contentWelcome}>
        <View style={styles.containerImage}>
            <Image style={styles.backgroundImage} source={BackgroundImage} />
        </View>
        <View />
        <View>
            <Text style={styles.welcomeText}>Welcome to the STORE</Text>
        </View>
        <Pressable
            onPress={() => {
                navigation.navigate('LoginScreen');
            }}
            style={styles.singUp}
        >
            <Text style={styles.singUpText}>{SING_IN}</Text>
        </Pressable>
    </View>
);

export default WelcomeScreen;

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
