import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { PLACE_HOLDER, SORT_FILTER_TITLE } from '../../const/CONTENT/HomeContent';
import {
    SCREEN_WIDTH, SPACE_MEDIUM, SPACE_SMALL, SPACE_XLARGE,
} from '../../const/LAYOUT';
import SearchButton from './SearchButton';

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
                onChangeText={(text) => {
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
    },
    searchBar: {
        flex: 1,
        borderWidth: 1,
        marginRight: SPACE_MEDIUM,
        paddingLeft: SPACE_SMALL,
        height: 40,
        fontSize: SPACE_MEDIUM,
    },
});
