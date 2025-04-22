import {
  View,
  Text,
  Image,
  Animated,
  Easing,
  Dimensions,
  Linking,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  checkFirstLaunch,
  setFirstLaunchComplete,
} from "@/utils/checkFirstLaunch";
import { Redirect, useRouter } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { ChevronRight } from "lucide-react-native";
import LanguageSelect from "@/components/LanguageSelect";
import { useI18n } from "@/locales/i18nProvider";
import LottieView from "lottie-react-native";
import { LINKS } from "@/utils/configs/links";

const { width } = Dimensions.get("window");

const WelcomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [firstLaunch, setFirstLaunch] = useState(false);
  const router = useRouter();
  const { t } = useI18n();
  const animation = useRef<LottieView>(null);
  const slideAnim = useRef(new Animated.Value(0)).current;

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

  const handleNexButton = async () => {
    router.push("/legal");
  };

  const handleNextSlide = () => {
    if (currentSlide === 0) {
      animation.current?.play(101, 360);
      Animated.timing(slideAnim, {
        toValue: -1,
        duration: 500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setCurrentSlide(1);
      });
    } else {
    }
  };

  const handleTermsPress = async () => {
    const url = LINKS.terms;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Can't open the link", `Please check the URL: ${url}`);
    }
  };

  const handlePrivacyPress = async () => {
    const url = LINKS.privacy; // replace with your actual Privacy URL
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Can't open the link", `Please check the URL: ${url}`);
    }
  };

  return (
    <View className=" flex pb-10 pt-[200px] flex-col justify-between w-full container px-4 mx-auto h-full bg-[#63c7b2]">
      <View className="flex flex-col justify-center items-center">
        <LottieView
          ref={animation}
          style={{
            width: 300,
            height: 300,
          }}
          loop={false}
          autoPlay={false}
          onLayout={() => {
            animation.current?.play(0, 100);
          }}
          source={require("../assets/lotties/lottie-flower.json")}
        />
      </View>
      <View className="flex flex-col flex-1 self-stretch justify-between h-full">
        <Animated.View
          style={{
            flexDirection: "row",
            gap: 16,
            width: width * 2,
            height: "100%",
            transform: [
              {
                translateX: slideAnim.interpolate({
                  inputRange: [-1, 0],
                  outputRange: [-width, 0],
                }),
              },
            ],
          }}
        >
          <>
            <View
              style={{ width: width - 32 }}
              className=" h-full flex flex-col justify-between"
            >
              <View>
                <Text className=" text-white font-winky text-start text-5xl pt-10 font-bold">
                  {t("welcome.title")}
                </Text>
                <Text className=" text-xl font-winky text-white mt-4 font-bold">
                  {t("welcome.subtitle")}
                </Text>
              </View>

              <View className="flex mt-20 flex-col gap-4">
                <LanguageSelect />
                <Button
                  onPress={handleNextSlide}
                  size="xl"
                  className=" bg-[#d84727] rounded-3xl"
                >
                  <ButtonText>{t("welcome.button")}</ButtonText>
                  <ChevronRight size={24} color={"#FFF"} />
                </Button>
              </View>
            </View>
          </>

          <>
            <View
              style={{ width: width - 32 }}
              className="ml-4 h-full flex flex-col justify-between"
            >
              <View>
                <Text className="text-white font-winky text-start text-5xl pt-10 font-bold">
                  {t("intro.title")}
                </Text>
                <Text className="text-xl font-winky text-white mt-4 font-bold">
                  {t("intro.subtitle")}
                </Text>
              </View>

              <View className="flex mt-20 flex-col gap-4">
                <View className="flex flex-col justify-center mb-4 items-center gap-1">
                  <View className=" flex flex-row justify-evenly gap-10">
                    <Pressable onPress={handleTermsPress}>
                      <Text className="text-white text-lg font-bold font-winky active:underline">
                        {t("legal.terms")}
                      </Text>
                    </Pressable>
                    <Pressable onPress={handlePrivacyPress}>
                      <Text className="text-white font-bold text-lg font-winky active:underline">
                        {t("legal.privacy")}
                      </Text>
                    </Pressable>
                  </View>
                  <Text className=" text-center text-base text-white font-winky">
                    {t("legal.agreement")}
                  </Text>
                </View>
                <Button
                  onPress={handleNexButton}
                  size="xl"
                  className=" bg-[#d84727] rounded-3xl"
                >
                  <ButtonText>{t("intro.button")}</ButtonText>
                  <ChevronRight size={24} color={"#FFF"} />
                </Button>
              </View>
            </View>
          </>
        </Animated.View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
