import {
    Image, Pressable, StyleSheet, Text, View,
} from 'react-native';
import React from 'react';
import {
    FONT_MEDIUM,
    RADIUS_MEDIUM,
    SPACE_SMALL,
    SPACE_XSMALL,
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
    <View style={styles.container}>
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
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: image,
                    }}
                />
            </View>
            <Text style={styles.title}>
                {`$ ${price} - ${title}`}
            </Text>
        </Pressable>
    </View>
);

export default ItemCard;

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: SPACE_SMALL,
    },
    content: {
        backgroundColor: backgroundColorCard,
        borderRadius: RADIUS_MEDIUM,
    },
    imageContainer: {
        width: '100%',
        aspectRatio: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: RADIUS_MEDIUM,
        resizeMode: 'cover',
    },
    title: {
        marginTop: SPACE_XSMALL,
        fontSize: FONT_MEDIUM,
    },
});
