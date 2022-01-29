import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import HeadersComponent from '../components/HeadersComponent';
import SearchComponent from '../components/SearchComponent';
import ContentComponent from '../components/ContentComponent';
import useGetProducts from '../hooks/useGetProducts';

const HomeScreen = ({ navigation }) => {
    const [searchBar, setSearchBar] = useState(null);
    const { products, searchTerm, loading, setSearchTerm } = useGetProducts();

    return (
        <View style={styles.content}>
            <HeadersComponent />
            <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ContentComponent
                loading={loading}
                products={products}
                navigation={navigation}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
});
