import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

import BodyParts from "../components/BodyParts";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
    return (
        <SafeAreaView
            className="flex-1 bg-white flex space-y-5"
            edges={["top"]}
        >
            <StatusBar style="dark" />

            {/* piada e avatar */}
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className="font-bold tracking-wider text-neutral-700"
                    >
                        PRONTO PARA
                    </Text>
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className="font-bold tracking-wider text-rose-500"
                    >
                        DAR CERTO
                    </Text>
                </View>

                <View className="flex justify-center items-center space-y-2">
                    <Image
                        className="rounded-full"
                        style={{ height: hp(6), width: hp(6) }}
                        source={{
                            uri: "https://github.com/silvaneimartins.png",
                        }}
                    />
                    <View
                        className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                        style={{ height: hp(5.5), width: hp(5.5) }}
                    >
                        <Ionicons
                            size={hp(3)}
                            color="gray"
                            name="notifications"
                        />
                    </View>
                </View>
            </View>

            {/* controle deslizante de imagem */}
            <View>
                <ImageSlider />
            </View>

            {/* lista de partes do corpo */}
            <View className="flex-1">
                <BodyParts />
            </View>
        </SafeAreaView>
    );
}
