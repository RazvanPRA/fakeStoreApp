import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import { SEARCH_TITLE } from '../const/CONTENT';
import { BLACK_TRANSPARENT, WHITE } from '../const/COLORS';
import { SPACE_XSMALL } from '../const/LAYOUT';

const SearchButton = () => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.text}>{SEARCH_TITLE}</Text>
        </Pressable>
    );
};

export default SearchButton;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: BLACK_TRANSPARENT,
        padding: SPACE_XSMALL,
    },
    text: {
        textAlign: 'center',
        color: WHITE,
    },
});
