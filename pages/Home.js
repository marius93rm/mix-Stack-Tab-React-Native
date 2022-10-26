import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Details") }}>
                <Text>Clicca qui per la FlatList</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
    },
});