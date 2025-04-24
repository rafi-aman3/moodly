import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { setFirstLaunchComplete } from "@/utils/checkFirstLaunch";
import { useRouter } from "expo-router";
import { useI18n } from "@/locales/i18nProvider";

const LegalAgreementPage = () => {
  const router = useRouter();
  const { t } = useI18n();

  const handleAgree = async () => {
    // Set first launch complete
    // await setFirstLaunchComplete();
    // Navigate to home
    router.replace("/home");
  };

  const handleDisagree = () => {
    // Return to welcome screen
    router.back();
  };
  return (
    <View className="flex pb-10 pt-[100px] flex-col justify-between w-full container px-4 mx-auto h-full bg-[#63c7b2]">
      <ScrollView>
        <View className="flex flex-col justify-center items-center">
          <Image
            className="w-[300px] h-[300px]"
            source={require("../assets/images/welcome_2.png")}
          />
        </View>
        <View className="mt-0">
          <Text className="text-white font-winky text-start text-5xl pt-10 font-bold mb-4">
            We treasure your privacy
          </Text>
          <Text className="text-xl font-winky text-white mt-4 font-bold mb-2">
            We use your device's advertising ID to:
          </Text>
          <View className="px-4">
            <Text className="text-white font-winky text-base mb-2">
              Detect and prevent fraudulent activity
            </Text>
            <Text className="text-white font-winky text-base mb-2">
              Improve our service quality and performance
            </Text>
            <Text className="text-white font-winky text-base mb-2">
              Provide personalized health recommendations
            </Text>
          </View>
          <Text className="text-white font-winky text-center text-base mt-4">
            We do NOT use this information for advertising targeting purposes.
          </Text>
        </View>
      </ScrollView>
      <View className="flex flex-col flex-1 self-stretch justify-between h-full">
        <View className="flex flex-col gap-4">
          <Button
            onPress={handleAgree}
            size="xl"
            className="bg-[#d84727] rounded-3xl"
          >
            <ButtonText>I Agree</ButtonText>
          </Button>
          <Button
            onPress={handleDisagree}
            size="xl"
            variant="outline"
            className="rounded-3xl border-white"
          >
            <ButtonText className="text-white">I Disagree</ButtonText>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default LegalAgreementPage;
