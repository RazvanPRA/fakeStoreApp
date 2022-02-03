import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { BLACK_TRANSPARENT } from '../const/COLORS';
import { EMPTY_STATE } from '../const/CONTENT/HomeContent';
import { SPACE_LARGE, SPACE_SMALL } from '../const/LAYOUT';
import ItemCard from './ItemCard';

const ContentComponent = ({ products, loading }) => (
    <View style={styles.content}>
        {loading ? (
            <ActivityIndicator color={BLACK_TRANSPARENT} />
        ) : (
            <FlatList
                style={styles.flatList}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
                data={products}
                ListEmptyComponent={() => (
                    <View>
                        <Text>{EMPTY_STATE}</Text>
                    </View>
                )}
                keyExtracto={(item) => item?.id}
                renderItem={({ item }) => (
                    <ItemCard
                        id={item?.id}
                        title={item?.title}
                        price={item?.price}
                        image={item?.image}
                    />
                )}
            />
        )}
    </View>
);

export default ContentComponent;

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    flatList: { flex: 1 },
    flatListContent: {
        flexGrow: 1,
        paddingTop: SPACE_LARGE,
        paddingHorizontal: SPACE_SMALL,
    },
});
