import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  useActivityStore,
  useColorPalettStore,
} from "@/store/preference-store";
import { Image } from "expo-image";
import DateTimePicker from "@react-native-community/datetimepicker";

const Reminder = () => {
  const { selectedActivities } = useActivityStore();
  const { selectedPalette } = useColorPalettStore();
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <View className="flex flex-col justify-center items-center">
        <Image
          source={require("../assets/images/reminder.png")}
          // placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
          style={styles.image}
        />

        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          is24Hour={true}
          // onChange={onChange}
        />
      </View>
    </View>
  );
};

export default Reminder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: "80%",
    height: 500,
    // aspectRatio: 16 / 9,
    // height: 200,
    // borderRadius: 8,
  },
});
