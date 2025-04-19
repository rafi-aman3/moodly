import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  checkFirstLaunch,
  setFirstLaunchComplete,
} from "@/utils/checkFirstLaunch";
import { Redirect, useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { ChevronRight } from "lucide-react-native";
import LanguageSelect from "@/components/LanguageSelect";
import { useI18n } from "@/locales/i18nProvider";

const WelcomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [firstLaunch, setFirstLaunch] = useState(false);
  const router = useRouter();
  const { t } = useI18n();

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const isFirstTime = await checkFirstLaunch();
      setFirstLaunch(isFirstTime ? false : true);
      setLoading(false);
    })();
  }, []);

  if (firstLaunch == true) {
    return <Redirect href="/home" />;
  }

  if (loading == true) {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Image
          source={require("../assets/images/splash.png")}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </View>
    );
  }

  const handleGetStarted = async () => {
    await setFirstLaunchComplete();
    router.push("/home");
  }; // TODO: add on press to get started button to set first launch to fals

  return (
    <View className=" flex pb-10 flex-col justify-between w-full container px-8 mx-auto h-full bg-[#63c7b2]">
      <View>
        <View className="flex mt-[200px] flex-col justify-center items-center">
          <Image
            source={require("../assets/images/welcome_2.png")}
            style={{ width: 200, height: 200, backgroundColor: "#63c7b2" }}
            className=" mt-20"
            resizeMode="contain"
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
        <LanguageSelect />
        <Button size="xl" className=" bg-[#d84727] rounded-3xl">
          <ButtonText>{t("welcome.button")}</ButtonText>
          <ChevronRight size={24} color={"#FFF"} />
        </Button>
      </View>
    </View>
  );
};

export default WelcomeScreen;
