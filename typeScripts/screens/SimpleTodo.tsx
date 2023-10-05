import { View, Text, StyleSheet, Dimensions, TextInput, FlatList, TouchableOpacity, Image, Alert, } from 'react-native'
import React, { useRef, useState } from 'react'
import Button from '../components/Button'
import Checkbox from 'expo-checkbox';
import Toast from 'react-native-toast-message';
import Filter from '../components/Filter';

const width = Dimensions.get("window").width


const SimpleTodo = () => {

    const [isFocus, setIsFocus] = useState(false);
    const [text, setText] = useState('')
    const [todo, setTodo] = useState([]);
    const [filterStatus, setFilterStatus] = useState("All")

    const addTodoText = () => {
        if (text.length === 0) return Toast.show({
            type: 'error',
            text1: 'Hello 👋',
            text2: 'Please fill the field',
        });
        setTodo(prev => [...prev, { text, isDone: false }]);
        setText("")
    }
    const deletTodo = (index: number) => {

        Alert.alert('Are You Sure, To Delete', '', [
            {
                text: 'Cancel'
            },
            { text: 'Yes', onPress: () => deleteConfirmatin(index) },
        ]);


    };

    const deleteConfirmatin = (index: number) => {
        setTodo(prev => [
            ...prev.slice(0, index),
            ...prev.slice(index + 1),
        ])
    }

    const updateTodo = (index: number) => {
        setTodo(prev => [
            ...prev.slice(0, index),
            { ...prev[index], isDone: !prev[index].isDone },
            ...prev.slice(index + 1),
        ])
    };

    const onFilter = (ft: string) => {
        setFilterStatus(ft)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TodoApp</Text>
            <View style={styles.todoContainer}>
                <TextInput
                    value={text}
                    onBlur={() => setIsFocus(false)}
                    onChangeText={(text) => setText(text)}
                    onFocus={() => setIsFocus(true)}
                    placeholder='Enter Text'
                    style={[styles.input, { borderColor: isFocus ? '#25e8e8' : 'black' }]}
                />
                <Button title='ADD' onPress={addTodoText} btnStyle={styles.addBtn} titleFont={22} />
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={todo}
                    renderItem={({ item, index }) => {
                        if (filterStatus === "All" || (filterStatus === "Pending" && !item.isDone) || (filterStatus === 'Completed' && item.isDone)) return (
                            <View style={[styles.listItem, {
                                backgroundColor: index % 2 === 0 ? '#91c991' : '#a991c9'
                            }]}>
                                <Checkbox style={styles.checkbox} value={item.isDone} onValueChange={() => updateTodo(index)} />
                                <Text style={[styles.text, { textDecorationLine: item.isDone ? 'underline line-through' : 'none' }]}>{item.text}</Text>
                                <TouchableOpacity onPress={() => deletTodo(index)}>
                                    <Image source={require('../../assets/delete.png')} style={styles.delete} />
                                </TouchableOpacity>
                            </View>)
                    }}
                    keyExtractor={(item, index) => item.text + index}
                />

            </View>
            {/* FilterStatus */}
            <Filter onFilter={onFilter} filterStatus={filterStatus} />
            <Toast position='top' topOffset={50} />
        </View>
    )
}

export default SimpleTodo;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        width: width,
        flex: 1,
    },
    todoContainer: {
        width: '85%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    input: {
        borderTopWidth: 0.7,
        borderBottomWidth: 0.7,
        borderLeftWidth: 0.7,
        height: 50,
        fontSize: 22,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        flex: 1
    },
    addBtn: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        width: width * 0.25,
        backgroundColor: '#25e8e8',
    },
    delete: {
        width: 30,
        height: 30
    },
    title: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 24,
        color: 'orange',
        marginBottom: 16
    },
    checkbox: {
        marginHorizontal: 8,
        color: 'red'
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginVertical: 10,
        paddingVertical: 12,
        paddingHorizontal: 5,
        borderRadius: 10,
        elevation: 8
    },
    text: {
        flex: 1,
        fontWeight: '500',
        fontSize: 18,
        color: '#ffff'
    },

})