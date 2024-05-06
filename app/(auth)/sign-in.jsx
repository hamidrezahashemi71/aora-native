import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import MainButton from '../../components/MainButton'
import { useState } from 'react'
import { Link } from 'expo-router'

const SignIn = () => {

    const [form, setform] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const forms = [
        {
            title: 'Email',
            value: form.email,
            styles: 'mt-7',
            type: 'email-address',
            onChange: (e) => setform({ ...form, email: e })
        },
        {
            title: 'Password',
            value: form.password,
            styles: 'mt-7',
            type: '',
            onChange: (e) => setform({ ...form, password: e })
        },
    ]

    const submitForm = () => {

    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center min-h-[90vh] px-4 my-6'>
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className='w-[115px] h-[35px]'
                    />
                    <Text className='text-2xl text-white font-semibold mt-10 font-psemibold'>
                        Log in to Aora
                    </Text>
                    {forms.map(form => (
                        <FormField
                            key={form.title}
                            title={form.title}
                            value={form.value}
                            handleChangeText={form.onChange}
                            extraStyles={form.styles}
                            keyboardType={form.type}
                        />
                    ))}
                    <MainButton
                        title={'Sign In'}
                        containerStyles={'mt-7'}
                        handlePress={submitForm}
                        isLoading={isSubmitting}
                    />
                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-gray-100 font-pregular'>
                            Don't have an account?
                        </Text>
                        <Link href={'/sign-up'} className='text-lg text-secondary font-psemibold'>Sign Up</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn