import React, { useState } from 'react';
import {  Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { actionCreators, addTodo } from '../store';
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
function Home({ toDos, addTodo }) {
    
    const [inputText, setInputText] = useState("");

    const onChangeText = (text) => {
        setInputText(text);
    }
    const onPressButton = () => {
        addTodo(inputText);
        setInputText("");
    }
    const renderItem = ({item}) => {
         console.log(item);
        return (
            <View><Text>{item.text}</Text></View>
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
                data={toDos}
                renderItem={renderItem}
                keyExtractor={toDos => toDos.id.toString()}
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
function mapStateToProps(state) {   
    return {
        toDos: state,
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        addTodo: text => dispatch(actionCreators.addTodo(text)),
        deleteTodo : id =>dispatch(actionCreators.deleteTodo(id))  
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);