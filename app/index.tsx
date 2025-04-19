import { View, Text, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  checkFirstLaunch,
  setFirstLaunchComplete,
} from "@/utils/checkFirstLaunch";
import { Redirect, useRouter } from "expo-router";

type RouteType = "index" | "welcome";

const WelcomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [firstLaunch, setFirstLaunch] = useState(false);
  const router = useRouter();

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
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Text>WELCOME</Text>
      <Button title="GET STARTED" onPress={handleGetStarted} />
    </View>
  );
};

export default WelcomeScreen;
