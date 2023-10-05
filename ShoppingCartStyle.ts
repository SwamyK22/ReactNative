import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sectionHeader: {
      alignItems: 'center',
        backgroundColor: '#3399FF',
        padding: 15,
        marginBottom: 20,
      },
      itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#CCE5FF',
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

      },
      itemName: {
        fontSize: 25,
        fontWeight: 'bold',
      },
      itemDetails: {
        marginTop: 5,
      },
});

export default styles;