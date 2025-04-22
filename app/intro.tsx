import { View, Text } from "react-native";
import React, { useRef } from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { ChevronRight } from "lucide-react-native";
import LottieView from "lottie-react-native";
import { useI18n } from "@/locales/i18nProvider";

const IntroScreen = () => {
  const animation = useRef<LottieView>(null);
  const { t } = useI18n();
  return (
    <View className=" flex pb-10 flex-col justify-between w-full container px-8 mx-auto h-full bg-[#63c7b2]">
      <View>
        <View className="flex mt-[200px] flex-col justify-center items-center">
          <LottieView
            ref={animation}
            style={{
              width: 200,
              height: 200,
            }}
            loop={false}
            autoPlay={false}
            onLayout={() => {
              animation.current?.play(81, 364);
            }}
            source={require("../assets/lotties/lottie-flower.json")}
          />
        </View>

        <Text className=" text-white font-winky text-start text-5xl pt-10 font-bold">
          {t("welcome.title")}
        </Text>
        <Text className=" text-xl font-winky text-white mt-4 font-bold">
          {t("welcome.subtitle")}
        </Text>
      </View>

      <View className="flex flex-col gap-4">
        <Button size="xl" className=" bg-[#d84727] rounded-3xl">
          <ButtonText>{t("welcome.button")}</ButtonText>
          <ChevronRight size={24} color={"#FFF"} />
        </Button>
      </View>
    </View>
  );
};

export default IntroScreen;
