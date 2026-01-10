import { Text as TamaText, View as TamaView } from 'tamagui'
import { Text, View } from 'react-native'
import { Text as UiText, View as UiView } from '@my/ui'
import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <View className="bg-red-500" style={{ backgroundColor: '#f0f' }}>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <View className="items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">Welcome from REACT NATIVE!</Text>
      </View>
      <TamaView className="flex-1 items-center justify-center bg-white">
        <TamaText className="text-xl font-bold text-blue-500">Welcome from TAMAGUI!</TamaText>
      </TamaView>
      <UiView className="flex-1 items-center justify-center bg-white">
        <UiText className="text-xl font-bold text-blue-500">Welcome from MONOREPO!</UiText>
      </UiView>
      <HomeScreen />
    </View>
  )
}
