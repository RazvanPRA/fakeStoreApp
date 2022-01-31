import {
    ActivityIndicator, Pressable, StyleSheet, Text,
} from 'react-native';
import React from 'react';
import {
    FONT_LARGE, RADIUS_SMALL, SPACE_MEDIUM,
} from '../const/LAYOUT';
import { BLACK, BLUE } from '../const/COLORS';

const ActionButton = ({
    onPress, title, isLoading, style,
}) => (
    <Pressable
        onPress={() => {
            if (!isLoading) {
                onPress();
            }
        }}
        style={[styles.button, style]}
    >
        {isLoading ? (
            <ActivityIndicator color={BLACK} />
        ) : (
            <Text style={styles.titleItem}>{title}</Text>)}
    </Pressable>
);

export default ActionButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: BLUE,
        borderRadius: RADIUS_SMALL,
        marginVertical: SPACE_MEDIUM,
        height: 45,
        justifyContent: 'center',
    },
    titleItem: {
        fontSize: FONT_LARGE,
        color: BLACK,
        textAlign: 'center',
    },
});
