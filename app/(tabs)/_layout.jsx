import { View, Text, Image } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import icons from '../../constants/icons'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text
                className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
                style={{ color }}
            >
                {name}
            </Text>
        </View>
    )
}

const tabs = [
    {
        name: 'home',
        title: 'Home',
        icon: icons.home,
    },
    {
        name: 'bookmark',
        title: 'Bookmark',
        icon: icons.bookmark,
    },
    {
        name: 'create',
        title: 'Create',
        icon: icons.plus,
    },
    {
        name: 'profile',
        title: 'Profile',
        icon: icons.profile,
    },
]

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#cdcde0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopColor: 1,
                        borderTopColor: '#232533',
                        height: 84,
                    }
                }}
            >
                {tabs.map((tab, index) => (
                    <Tabs.Screen
                        key={tab.name}
                        name={tab.name}
                        options={{
                            title: tab.title,
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={tab.icon}
                                    color={color}
                                    name={tab.title}
                                    focused={focused}
                                />
                            )
                        }}
                    />
                ))}
            </Tabs>
        </>
    )
}

export default TabsLayout