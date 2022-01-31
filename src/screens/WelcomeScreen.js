import React from 'react';
import {
    Image, StyleSheet, Text, View,
} from 'react-native';
import BackgroundImage from '../assets/Image.jpg';
import ActionButton from '../components/ActionButton';
import { backgroundColorCard, BLACK } from '../const/COLORS';
import { SING_IN, WELCOME_TITLE } from '../const/CONTENT/LogInContent';
import {
    FONT_XXLARGE,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    SPACE_LARGE,
} from '../const/LAYOUT';

const WelcomeScreen = ({ navigation }) => (
    <View style={styles.contentWelcome}>
        <View style={styles.containerImage}>
            <Image style={styles.backgroundImage} source={BackgroundImage} />
        </View>
        <View />
        <View>
            <Text style={styles.welcomeText}>{WELCOME_TITLE}</Text>
        </View>
        <ActionButton
            onPress={() => {
                navigation.navigate('LoginScreen');
            }}
            title={SING_IN}
            style={styles.button}
        />
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
    button: {
        marginHorizontal: SPACE_LARGE,
    },

});
