import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BLACK_TRANSPARENT, WHITE } from '../const/COLORS';
import { SPACE_XSMALL } from '../const/LAYOUT';

const SortFilterButton = () => {
    return (
        <Pressable style={styles.button} onPress={() => { }}>
            <Text style={styles.text}>Sort/Filter</Text>
        </Pressable>
    );
};

export default SortFilterButton;

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
