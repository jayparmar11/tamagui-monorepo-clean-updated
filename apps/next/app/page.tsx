'use client'

import { HomeScreen } from 'app/features/home/screen'
import { Button, Text, View } from '@my/ui'

function AppPage() {
  return (
    <View className="">
      <HomeScreen />
      {/* Below is SAME CODE FROM above HomeScreen */}
      <View className="bg-red-400">
        <Text className="!text-blue-500">Hello World!</Text>
      </View>
    </View>
  )
}

export default AppPage
