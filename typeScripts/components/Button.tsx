import { StyleSheet, Text, TouchableOpacity, Dimensions, StyleProp, ViewStyle } from 'react-native'
import React from 'react';

type ButtonProps = {
    title: string,
    onPress: () => void,
    btnStyle: StyleProp<ViewStyle>,
    titleFont: number,
}
const width = Dimensions.get("window").width

const Button = (props: ButtonProps) => {
    const { title, onPress, btnStyle, titleFont } = props;
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={btnStyle}>
            <Text style={[styles.title, { fontSize: titleFont }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    title: {
        fontWeight: "500",
        textAlign: 'center',
        color: '#ffff',
    }
})