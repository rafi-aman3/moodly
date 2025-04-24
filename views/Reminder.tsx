import { View, Text } from "react-native";
import React from "react";
import {
  useActivityStore,
  useColorPalettStore,
} from "@/store/preference-store";

const Reminder = () => {
  const { selectedActivities } = useActivityStore();
  const { selectedPalette } = useColorPalettStore();

  return (
    <View>
      <Text>Reminder</Text>
    </View>
  );
};

export default Reminder;
