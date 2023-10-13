
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.iconsContainer}>
                <Ionicons name="settings-outline" size={20} color="black" style={styles.icon} />
                <Ionicons name="notifications-outline" size={20} color="black" style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 20,
    },
});

export default Home;