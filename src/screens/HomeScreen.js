import { StyleSheet, View } from 'react-native';
import React from 'react';
import HeadersComponent from '../components/HeadersComponent';
import SearchComponent from '../components/search/SearchComponent';
import ContentComponent from '../components/ContentComponent';
import useGetProducts from '../hooks/useGetProducts';

const HomeScreen = ({ navigation }) => {
    const {
        products,
        searchTerm,
        loading,
        categories,
        selectedCategory,
        setSelectedCategory,
        sortList,
        selectedSort,
        setSelectedSort,
        setSearchTerm,
    } = useGetProducts();

    return (
        <View style={styles.content}>
            <HeadersComponent />
            <SearchComponent
                categories={categories}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
                sortList={sortList}
            />
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
