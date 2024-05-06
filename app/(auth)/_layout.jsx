import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
    const stacks = [
        { name: 'sign-in' },
        { name: 'sign-up' },
    ]

    return (
        <>
            <Stack>
                {stacks.map((stack) => (
                    <Stack.Screen
                        key={stack.name}
                        name={stack.name}
                        options={{
                            headerShown: false
                        }}
                    />
                ))}
                <StatusBar backgroundColor='#161622' style='light' />
            </Stack>
        </>
    )
}

export default AuthLayout