import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LIGHT_BLUE } from '../../const/COLORS';
import {
    FONT_LARGE,
    RADIUS_MEDIUM,
    SPACE_SMALL,
    SPACE_XSMALL,
    SPACE_XXLARGE,
} from '../../const/LAYOUT';

const RadioButton = ({ item, title, setSelected, selected }) => {
    return (
        <Pressable
            onPress={() => {
                if (item === selected) {
                    setSelected(null);
                } else {
                    setSelected(item);
                }
            }}
            style={styles.filterButton}>
            <View
                style={[
                    styles.radioButton,
                    item === selected && {
                        backgroundColor: LIGHT_BLUE,
                    },
                ]}
            />
            <Text style={styles.filterButtonText}>{title}</Text>
        </Pressable>
    );
};

export default RadioButton;

const styles = StyleSheet.create({
    filterButton: {
        flexDirection: 'row',
        marginVertical: SPACE_XSMALL,
    },
    radioButton: {
        borderColor: LIGHT_BLUE,
        borderWidth: 1,
        height: SPACE_XXLARGE,
        aspectRatio: 1,
        borderRadius: RADIUS_MEDIUM,
        marginRight: SPACE_SMALL,
    },
    filterButtonText: {
        fontSize: FONT_LARGE,
    },
});
