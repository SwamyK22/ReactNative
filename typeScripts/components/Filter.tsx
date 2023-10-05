import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button';

type FilterProps = {
    onFilter: (arg: string) => void,
    filterStatus: string
}


const Filter = ({ onFilter, filterStatus }: FilterProps) => {
    return (
        <View style={styles.constainer}>
            <Button title='All'
                onPress={() => onFilter('All')}
                titleFont={18}
                btnStyle={[styles.fltBtn, { backgroundColor: filterStatus === 'All' ? 'orange' : '#35f23f' }]} />
            <Button title='Pending'
                onPress={() => onFilter("Pending")}
                titleFont={18}
                btnStyle={[styles.fltBtn, { backgroundColor: filterStatus === 'Pending' ? 'orange' : '#35f23f' }]} />
            <Button title='Completed'
                onPress={() => onFilter('Completed')}
                titleFont={18}
                btnStyle={[styles.fltBtn, { backgroundColor: filterStatus === 'Completed' ? 'orange' : '#35f23f' }]} />
        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    constainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
    },
    fltBtn: {
        backgroundColor: '#35f23f',
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#fff',
        paddingVertical: 5
    }
})