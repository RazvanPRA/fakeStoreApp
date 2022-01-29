import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { PLACE_HOLDER } from '../const/CONTENT';
import { SCREEN_WIDTH, SPACE_MEDIUM, SPACE_XLARGE } from '../const/LAYOUT';
import SearchButton from './SearchButton';
import SortFilterButton from './SortFilterButton';

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
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
            <SearchButton />
            <SortFilterButton />
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
