import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function Menu() {
    const [fontLoaded] = useFonts({
        'Lato Black': require('../../assets/fonts/Lato-Black.ttf'),
        'Lato': require('../../assets/fonts/Lato-Regular.ttf'),
        'Lato Thin': require('../../assets/fonts/Lato-Thin.ttf'),
    });

    return (
        <View style={styles.container}>
                <TouchableHighlight style={styles.menu_button} onPress={() => Alert.alert("Hello")}>
                    <Text style={styles.menu_item_header}>Chicago Style Hot Dog</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.menu_button}>
                    <Text style={styles.menu_item_header}>Hi</Text>
                </TouchableHighlight>
                <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'start',
      flexDirection: 'column',
      top: 44
    },
    menu_button: {
      backgroundColor: 'blue',
      width: '100%',
      height: 100,
      alignItems: 'start',
      justifyContent: 'start',
      borderBottomWidth: 2
    },
    menu_item_header: {
      backgroundColor: 'red',
      fontSize: 30,
    }
});