import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { BLACK_TRANSPARENT } from '../const/COLORS';
import { SPACE_LARGE, SPACE_SMALL } from '../const/LAYOUT';
import ItemCard from './ItemCard';

const ContentComponent = ({ navigation, products, loading }) => (
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
                        <Text>No products found matching your search</Text>
                    </View>
                )}
                keyExtracto={(item) => item?.id}
                renderItem={({ item }) => (
                    <ItemCard
                        itemId={item?.id}
                        title={item?.title}
                        price={item?.price}
                        description={item?.description}
                        category={item?.category}
                        image={item?.image}
                        rate={item?.rating?.rate}
                        count={item?.rating?.count}
                        navigation={navigation}
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
