import { View, Text, Button } from "react-native";
import React from "react";
import { clearStorage, getStorageKeys } from "@/utils/storage";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="CLEAR" onPress={clearStorage} />
      <Button title="GET KEYS" onPress={getStorageKeys} />
    </View>
  );
};

export default HomeScreen;
