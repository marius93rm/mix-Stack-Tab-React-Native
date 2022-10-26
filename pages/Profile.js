import { SectionList, View, Text, StyleSheet } from 'react-native';

const sections = [
    {
        id:0,
        title: "Basic Components",
        data: [
            { id: 1, name: 'Text' },
            { id: 2, name: 'Image' },
            { id: 3, name: 'View' }
        ]
    },
    {
        id:1,
        title: "List Components",
        data: [
            { id: 4, name: 'ScrollView' },
            { id: 5, name: 'FlatList' },
            { id: 6, name: 'SectionList' }
        ]
    }
]

export default Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={sections}
                renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={item => item.id}
            />
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