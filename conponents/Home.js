import React, { useState } from 'react';
import {  Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
function Home({toDos}){
    const [inputText, setInputText] = useState("");

    const onChangeText = (text) => {
        setInputText(text);
    }
    const onPressButton = () => {
        setInputText("");
    }
    const renderItem = ({text}) => {
        return (
            <View><Text>{text}</Text></View>
        )
    }
    return (
        <View style={styles.container}>
            <Text>To Do</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.inputText} value={inputText} onChangeText={onChangeText} placeholder={"일정을 입력해 주세요 "} />
                <TouchableOpacity style={styles.inputButton} onPress={onPressButton}>
                    <Text style={styles.inputButtonText}>ADD</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={JSON.stringify(toDos)}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    inputBox: {
        width: WIDTH - 60,
        flexDirection: 'row'
    },
    inputText: {
        flex: 1,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    },
    inputButton: {
        padding: 10,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'blue',
    },
    inputButtonText: {
        color: 'white',
        fontWeight: 'bold'
    }

});
function mapStateToProps(state, ownProps) {   
    return { toDos: state };
}
export default connect(mapStateToProps)(Home);