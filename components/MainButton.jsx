import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MainButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            className={`${containerStyles}
            ${isLoading ? 'opacity-50' : ''}
             bg-secondary rounded-xl min-h-[62px] justify-center items-center`}
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
        >
            <Text className={`${textStyles}text-primary font-psemibold text-lg`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default MainButton