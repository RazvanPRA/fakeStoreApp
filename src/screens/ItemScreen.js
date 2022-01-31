import React from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ActionButton from '../components/ActionButton';
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
} from '../const/LAYOUT';

const ItemScreen = ({ route }) => {
    const {
        title, price, description, category, image, rate, count,
    } = route.params;

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
                        {`${rate}/${MAX_RATE}`}
                    </Text>
                    <Text style={styles.imageTextTop}>
                        {`(${count} reviews)`}
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
            <ActionButton onPress={() => { console.log('buy now was pressed'); }} title={`$${price} - Buy now`} />

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
    box: {
        flexGrow: 1,
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
