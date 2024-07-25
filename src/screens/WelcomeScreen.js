import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1 flex justify-around bg-white'>
            <View className='space-y-2'>
                <Text style={{ fontSize: wp(10) }} className='text-center font-bold text-gray-700'>Phoebe</Text>
                <Text style={{ fontSize: wp(3.5) }} className='text-center tracking-wider text-gray-600 font-semibold'>The future is here, powerd by AI</Text>
            </View>
            <View className='flex-row justify-center'>
                <Image style={{ width: wp(70), height: wp(70) }} source={require('../../assets/images/bot.png')} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} className='bg-sky-700 mx-5 p-4 rounded-2xl'>
                <Text style={{ fontSize: wp(5) }} className='text-center font-bold text-white'>Get started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}