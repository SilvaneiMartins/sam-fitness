import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Index() {
    const router = useRouter();
    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style="light" />
            <Image
                className="h-full w-full absolute"
                source={require("../assets/images/welcome.png")}
            />

            <LinearGradient
                colors={["transparent", "#18181b"]}
                style={{ width: wp(100), height: hp(70) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
                className="flex justify-end pb-12 space-y-8"
            >
                <Animated.View
                    entering={FadeInDown.delay(100).springify()}
                    className="flex items-center"
                >
                    <Text
                        style={{ fontSize: hp(5) }}
                        className="text-white font-bold tracking-wide"
                    >
                        Melhores{" "}
                        <Text className="text-rose-500">Exercícios</Text>
                    </Text>
                    <Text
                        style={{ fontSize: hp(5) }}
                        className="text-white font-bold tracking-wide"
                    >
                        Para você
                    </Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).springify()}>
                    <TouchableOpacity
                        onPress={() => router.push("home")}
                        style={{ height: hp(7), width: wp(80) }}
                        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                    >
                        <Text
                            style={{ fontSize: hp(3) }}
                            className="text-white font-bold tracking-widest"
                        >
                            Vamos Iniciar
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    );
}
