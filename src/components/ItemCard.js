import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
    RADIUS_MEDIUM,
    RADIUS_SMALL,
    SCREEN_WIDTH,
    SPACE_SMALL,
} from '../const/LAYOUT';
import { backgroundColorCard, WHITE } from '../const/COLORS';

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
}) => {
    return (
        <Pressable
            onPress={() => {
                navigation.navigate('ItemScreen', {
                    id: itemId,
                    title: title,
                    price: price,
                    description: description,
                    category: category,
                    image: image,
                    rate: rate,
                    count: count,
                });
            }}
            style={styles.content}>
            <Image
                style={styles.image}
                source={{
                    uri: image,
                }}
            />
            <View style={styles.container}>
                <Text>
                    $ {price} - {title}
                </Text>
            </View>
        </Pressable>
    );
};

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
