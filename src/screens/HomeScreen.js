import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features.js'
import Messages from '../components/Messages.js'
import { dummyMessages } from '../constants/index.js'



export default function HomeScreen() {
    const [messages, setMassages] = useState(dummyMessages);
    const [recording, setRecording] = useState(true);
    const clear = () => {
        setMassages([])
    }
    const stopSpeaking = () => {
        setRecording(false)
    }
    return (
        <View className='flex-1 bg-white'>
            <SafeAreaView className='flex-1 flex mx-5'>
                {/* BOT ICON */}
                <View className='flex-row justify-center'>
                    <Image source={require('../../assets/images/bot.png')} style={{ height: hp(15), width: hp(15) }} />
                </View>
                {/* features || messages */}
                {
                    messages.length > 0 ? (<Messages messages={messages} />) : (<Features />)
                }
                {/* Btns: record/clear/stop */}

                <View className='flex justify-center items-center'>
                    {
                        recording && (
                            <TouchableOpacity onPress={stopSpeaking} className='absolute left-10'>
                                <Image source={require('../../assets/images/stop.png')} style={{ height: hp(6.5), width: hp(6.5) }} />
                            </TouchableOpacity>

                        )
                    }
                    {
                        recording ? (
                            <TouchableOpacity >
                                <Image source={require('../../assets/images/loading.gif')} style={{ height: hp(6.5), width: hp(6.5) }} />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/microphone.png')} style={{ height: hp(6.5), width: hp(6.5) }} />
                            </TouchableOpacity>
                        )
                    }
                    {
                        messages.length > 0 && (
                            <TouchableOpacity onPress={clear} className='absolute right-10'>
                                <Image source={require('../../assets/images/cancel.png')} style={{ height: hp(6.5), width: hp(6.5) }} />
                            </TouchableOpacity>

                        )
                    }

                </View>
            </SafeAreaView >
        </View >
    )
}