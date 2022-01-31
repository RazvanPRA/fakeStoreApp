import { StyleSheet, Text, Pressable, Modal, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { BLACK, BLACK_TRANSPARENT, LIGHT_BLUE, WHITE } from '../../const/COLORS';
import {
    FONT_LARGE,
    FONT_XLARGE,
    RADIUS_MEDIUM,
    RADIUS_SMALL,
    RADIUS_XSMALL,
    SPACE_LARGE,
    SPACE_SMALL,
    SPACE_XSMALL,
    SPACE_XXLARGE,
} from '../../const/LAYOUT';
import { SORT_FILTER_TITLE, DONE } from '../../const/CONTENT/HomeContent';
import RadioButton from './RadioButton';

const SearchButton = ({
    onPress,
    title,
    setModalVisible,
    modalVisible,
    categories,
    selectedCategory,
    setSelectedCategory,
    sortList,
    selectedSort,
    setSelectedSort,
}) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>{SORT_FILTER_TITLE}</Text>
                        {!!categories?.length &&
                            categories?.map(item => {
                                return (
                                    <RadioButton
                                        key={item}
                                        item={item}
                                        title={item}
                                        setSelected={setSelectedCategory}
                                        selected={selectedCategory}
                                    />
                                );
                            })}
                        {!!sortList?.length &&
                            sortList?.map(({ value, display }) => {
                                return (
                                    <RadioButton
                                        key={value}
                                        item={value}
                                        title={display}
                                        setSelected={setSelectedSort}
                                        selected={selectedSort}
                                    />
                                );
                            })}
                        <Pressable
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                            style={styles.doneButton}>
                            <Text style={styles.textDone}>{DONE}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SearchButton;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: BLACK_TRANSPARENT,
        padding: SPACE_XSMALL,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: SPACE_LARGE,
        backgroundColor: 'white',
        borderRadius: RADIUS_SMALL,
        padding: SPACE_LARGE,
        shadowColor: BLACK,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: RADIUS_XSMALL,
        elevation: 5,
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: FONT_XLARGE,
        marginBottom: SPACE_SMALL,
    },
    doneButton: {
        height: 50,
        borderRadius: 25,
        backgroundColor: LIGHT_BLUE,
        justifyContent: 'center',
        marginTop: SPACE_SMALL,
    },
    textDone: {
        textAlign: 'center',
        fontSize: FONT_LARGE,
        color: WHITE,
    },
    text: {
        textAlign: 'center',
        color: WHITE,
    },
});
