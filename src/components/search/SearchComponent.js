import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { PLACE_HOLDER } from '../../const/CONTENT/HomeContent';
import { SCREEN_WIDTH, SPACE_MEDIUM, SPACE_XLARGE } from '../../const/LAYOUT';
import SearchButton from './SearchButton';
import { SEARCH_TITLE, SORT_FILTER_TITLE } from '../../const/CONTENT/HomeContent';

const SearchComponent = ({
    searchTerm,
    setSearchTerm,
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedSort,
    setSelectedSort,
    sortList,
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.content}>
            <TextInput
                placeholder={PLACE_HOLDER}
                style={styles.searchBar}
                onChangeText={text => {
                    setSearchTerm(text);
                }}
                value={searchTerm}
            />
            <SearchButton
                title={SORT_FILTER_TITLE}
                modalVisible={modalVisible}
                onPress={() => setModalVisible(true)}
                setModalVisible={setModalVisible}
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                sortList={sortList}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
            />
        </View>
    );
};

export default SearchComponent;

const styles = StyleSheet.create({
    content: {
        padding: SPACE_XLARGE,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    searchBar: {
        borderWidth: 1,
        padding: 0,
        fontSize: SPACE_MEDIUM,
        width: SCREEN_WIDTH / 1.8,
    },
});
