import { View, Text, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Features() {
    return (
        <View style={{ height: hp(60) }} className='space-y-4'>
            <Text style={{ fontSize: wp(6.5) }} className='font-semibold text-gray-700'>Features</Text>
            {/* ChatGPT */}
            <View className='bg-sky-200 p-4 rounded-xl space-y-2'>
                <View className='flex-row items-center space-x-4'>
                    <Image source={require('../../assets/images/chatgpt.png')} style={{ height: hp(4), width: hp(4) }} />
                    <Text style={{ fontSize: wp(4.8) }} className='font-semibold text-gray-700'>ChatGPT</Text>

                </View>
                <Text style={{ fontSize: wp(3.5) }} className='text-gray-700 font-medium'>ChatGPT can assist with a variety of tasks, including answering questions, providing explanations, and engaging in conversation. </Text>
            </View>
            {/* DALL-E */}
            <View className='bg-purple-200 p-4 rounded-xl space-y-2'>
                <View className='flex-row items-center space-x-4'>
                    <Image source={require('../../assets/images/chatgpt.png')} style={{ height: hp(4), width: hp(4) }} />
                    <Text style={{ fontSize: wp(4.8) }} className='font-semibold text-gray-700'>DALL-E</Text>

                </View>
                <Text style={{ fontSize: wp(3.5) }} className='text-gray-700 font-medium'>DALL-E can generate imaginative and diverse images from textual descriptons, expanding the boundaries of visual creativity. </Text>
            </View>
            {/* Smart AI */}
            <View className='bg-emerald-200 p-4 rounded-xl space-y-2'>
                <View className='flex-row items-center space-x-4'>
                    <Image source={require('../../assets/images/chatgpt.png')} style={{ height: hp(4), width: hp(4) }} />
                    <Text style={{ fontSize: wp(4.8) }} className='font-semibold text-gray-700'>Smart AI</Text>

                </View>
                <Text style={{ fontSize: wp(3.5) }} className='text-gray-700 font-medium'>A powerful voice assistant with the abilities of ChatGPT and DALL-E, providing you the best of both worlds. </Text>
            </View>
        </View >
    )
}