import React, { useEffect } from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    backgroundColorCard,
    BLACK,
    BLUE,
    WHITE,
} from '../const/COLORS';
import { MAX_RATE } from '../const/CONTENT/ItemContent';
import {
    FONT_LARGE,
    FONT_MEDIUM,
    RADIUS_SMALL,
    SCREEN_WIDTH,
    SPACE_LARGE,
    SPACE_MEDIUM,
    SPACE_SMALL,
    SPACE_XXLARGE,
} from '../const/LAYOUT';

const ItemScreen = ({ navigation, route }) => {
    const {
        title, price, description, category, image, rate, count,
    } = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: 'Back',
        });
    });
    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
        >
            <View style={styles.backgroundColorImage} />
            <Image
                style={styles.itemScreenImage}
                source={{
                    uri: image,
                }}
            />
            <View style={styles.imageBox}>
                <View style={styles.rateAndCounter}>
                    <Text style={styles.imageTextTop}>
                        {rate}
                        /
                        {MAX_RATE}
                    </Text>
                    <Text style={styles.imageTextTop}>
                        (
                        {count}
                        {' '}
                        reviews)
                    </Text>
                </View>
                <View style={styles.category}>
                    <Text style={styles.imageTextBottom}>{category}</Text>
                </View>
            </View>
            <View style={styles.box}>
                <Text style={styles.titleItem}>{title}</Text>
                <Text style={styles.descriptionItem}>{description}</Text>
            </View>
            <Pressable style={styles.buttonBuy}>
                <Text style={styles.textBuy}>
                    $
                    {price}
                    {' '}
                    - Buy now
                </Text>
            </Pressable>
        </ScrollView>
    );
};

export default ItemScreen;

const styles = StyleSheet.create({
    backgroundColorImage: {
        position: 'absolute',
        backgroundColor: WHITE,
        width: SCREEN_WIDTH,
        aspectRatio: 1,
    },
    itemScreenImage: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        aspectRatio: 1,
        resizeMode: 'contain',
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: SPACE_MEDIUM,
    },
    imageBox: {
        height: SCREEN_WIDTH,
        justifyContent: 'space-between',
        padding: SPACE_LARGE,
    },
    rateAndCounter: {
        alignSelf: 'flex-end',
    },
    imageTextTop: {
        fontSize: FONT_LARGE,
        textAlign: 'center',
        color: BLACK,
        backgroundColor: backgroundColorCard,
    },
    category: {
        alignSelf: 'flex-start',
    },
    imageTextBottom: {
        fontSize: FONT_LARGE,
        color: BLACK,
        backgroundColor: backgroundColorCard,
    },
    buttonBuy: {
        width: SCREEN_WIDTH / 2,
        alignSelf: 'center',
        position: 'absolute',
        bottom: SPACE_XXLARGE,
        backgroundColor: BLUE,
        paddingVertical: SPACE_SMALL,
        borderRadius: RADIUS_SMALL,
    },
    titleItem: {
        fontSize: FONT_LARGE,
        paddingVertical: SPACE_MEDIUM,
        color: BLACK,
    },
    descriptionItem: {
        fontSize: FONT_MEDIUM,
        color: BLACK,
    },
    textBuy: {
        textAlign: 'center',
        fontSize: FONT_LARGE,
        color: WHITE,
        fontWeight: 'bold',
    },
});
