import { View, Text, StyleSheet } from 'react-native';

export default Details = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>Details</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});