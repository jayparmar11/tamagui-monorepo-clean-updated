import { Text, View } from '@my/ui'
import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">Welcome to Nativewind!</Text>
      </View>
      <HomeScreen />
    </>
  )
}
