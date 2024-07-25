import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Messages({ messages }) {

    return (
        <View className='space-y-2 flex-1'>
            <Text className='text-gray-700 font-semibold ml-1' style={{ fontSize: wp(5) }}>Assistant</Text>
            <View style={{ height: hp(58) }} className='bg-neutral-200 rounded-3xl p-4'>
                <ScrollView bounces={false} className='space-y-4' showsVerticalScrollIndicator={false}>
                    {
                        messages.map((message, index) => {
                            if (message.role == 'assistant') {
                                if (message.content.includes('https')) {
                                    //image
                                    return (
                                        <View key={index} className='flex-row justify-start'>
                                            <View className='p-2 flex rounded-2xl bg-sky-100 rounded-tl-none'>
                                                <Image source={{ uri: message.content }} className='rounded-2xl' style={{ height: wp(60), width: wp(60) }} />

                                            </View>
                                        </View>
                                    )
                                } else {
                                    //text
                                    return (
                                        <View key={index} className='flex-row justify-start'>
                                            <View style={{ width: wp(70) }} className='bg-sky-100 rounded-xl p-2 rounded-tl-none'>
                                                <Text>{message.content}</Text>
                                            </View>
                                        </View>
                                    )
                                }
                            } else {
                                //user input
                                return (
                                    <View key={index} className='flex-row justify-end'>
                                        <View style={{ width: wp(70) }} className='bg-white rounded-xl p-2 rounded-tr-none'>
                                            <Text>{message.content}</Text>
                                        </View>
                                    </View>
                                )
                            }
                        })
                    }
                </ScrollView>
            </View>
        </View >

    )
}