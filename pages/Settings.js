import { View, Text, StyleSheet } from 'react-native';

export default Settings = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>Settings</Text>
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