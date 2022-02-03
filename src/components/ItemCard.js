import {
    Image, Pressable, StyleSheet, Text, View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    FONT_MEDIUM,
    RADIUS_MEDIUM,
    SPACE_SMALL,
    SPACE_XSMALL,
} from '../const/LAYOUT';
import { backgroundColorCard } from '../const/COLORS';

const ItemCard = ({
    id,
    title,
    price,
    image,
}) => {
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    navigate('ItemScreen', {
                        id,
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
};

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
