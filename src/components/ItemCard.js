import {
    Image, Pressable, StyleSheet, Text, View,
} from 'react-native';
import React from 'react';
import {
    RADIUS_MEDIUM,
    SCREEN_WIDTH,
    SPACE_SMALL,
} from '../const/LAYOUT';
import { backgroundColorCard } from '../const/COLORS';

const ItemCard = ({
    navigation,
    itemId,
    title,
    price,
    description,
    category,
    image,
    rate,
    count,
}) => (
    <Pressable
        onPress={() => {
            navigation.navigate('ItemScreen', {
                id: itemId,
                title,
                price,
                description,
                category,
                image,
                rate,
                count,
            });
        }}
        style={styles.content}
    >
        <Image
            style={styles.image}
            source={{
                uri: image,
            }}
        />
        <View style={styles.container}>
            <Text>
                $
                {' '}
                {price}
                {' '}
                -
                {' '}
                {title}
            </Text>
        </View>
    </Pressable>
);

export default ItemCard;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        margin: SPACE_SMALL,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        aspectRatio: 1,
        backgroundColor: backgroundColorCard,
        borderRadius: RADIUS_MEDIUM,
    },
    image: {
        width: SCREEN_WIDTH / 4.5,
        aspectRatio: 1,
        borderRadius: RADIUS_MEDIUM,
        resizeMode: 'contain',
    },
});
