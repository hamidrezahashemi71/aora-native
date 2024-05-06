import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function App() {
    return (
        <View className='flex-1 bg-white justify-center items-center'>
            <Text className='text-3xl font-pblack'>Aora!</Text>
            <StatusBar style="auto" />
            <Link href={'/home'} style={{ color: 'blue' }}>
                Go to Home!
            </Link>
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });