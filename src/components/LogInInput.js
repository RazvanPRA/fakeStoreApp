import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import {
    FONT_LARGE, RADIUS_SMALL, SPACE_SMALL, SPACE_XXLARGE,
} from '../const/LAYOUT';
import { backgroundColorCard } from '../const/COLORS';

const LogInInput = ({
    inputRef,
    ...restProps
}) => (
    <TextInput
        ref={inputRef}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        {...restProps}
    />
);

export default LogInInput;

const styles = StyleSheet.create({
    input: {
        marginHorizontal: SPACE_XXLARGE,
        backgroundColor: backgroundColorCard,
        padding: 0,
        height: 40,
        marginVertical: SPACE_SMALL,
        borderRadius: RADIUS_SMALL,
        textAlign: 'center',
        fontSize: FONT_LARGE,
    },
});
