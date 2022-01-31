import {
    StyleSheet, Text, Pressable, Modal, View,
} from 'react-native';
import React from 'react';
import {
    BLACK, BLACK_TRANSPARENT, LIGHT_BLUE, WHITE,
} from '../../const/COLORS';
import {
    FONT_LARGE,
    FONT_XLARGE,
    RADIUS_SMALL,
    RADIUS_XSMALL,
    SPACE_LARGE,
    SPACE_SMALL,
    SPACE_XSMALL,
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
}) => (
    <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
        <Modal
            animationType="slide"
            transparent
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>{SORT_FILTER_TITLE}</Text>
                    {!!categories?.length && categories?.map((item) => (
                        <RadioButton
                            key={item}
                            item={item}
                            title={item}
                            setSelected={setSelectedCategory}
                            selected={selectedCategory}
                            onPress={() => {
                                if (item === selectedCategory) {
                                    setSelectedCategory(null);
                                } else {
                                    setSelectedCategory(item);
                                }
                            }}
                        />
                    ))}
                    {!!sortList?.length && sortList?.map(({ value, display }) => (
                        <RadioButton
                            key={value}
                            item={value}
                            title={display}
                            setSelected={setSelectedSort}
                            selected={selectedSort}
                            onPress={() => { setSelectedSort(value); }}
                        />
                    ))}
                    <Pressable
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        style={styles.doneButton}
                    >
                        <Text style={styles.textDone}>{DONE}</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    </Pressable>
);

export default SearchButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: BLACK_TRANSPARENT,
        paddingHorizontal: SPACE_SMALL,
        justifyContent: 'center',
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
