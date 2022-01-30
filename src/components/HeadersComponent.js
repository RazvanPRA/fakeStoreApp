import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BLACK_TRANSPARENT } from '../const/COLORS';
import { SPACE_LARGE, SPACE_MEDIUM, SPACE_XXLARGE } from '../const/LAYOUT';
import { SUB_TITLE, TITLE } from '../const/CONTENT/HomeContent';

const HeadersComponent = () => {
    return (
        <View style={styles.contentHeader}>
            <Text style={styles.title}>{TITLE}</Text>
            <Text style={styles.subTitle}>{SUB_TITLE}</Text>
        </View>
    );
};

export default HeadersComponent;

const styles = StyleSheet.create({
    contentHeader: {
        marginLeft: SPACE_LARGE,
    },
    title: {
        color: BLACK_TRANSPARENT,
        fontSize: SPACE_XXLARGE,
    },
    subTitle: {
        color: BLACK_TRANSPARENT,
        fontSize: SPACE_MEDIUM,
    },
});
