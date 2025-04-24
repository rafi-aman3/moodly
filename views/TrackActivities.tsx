import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { activities } from "@/utils/configs/activities";
import { Check, Circle } from "lucide-react-native";
import { useActivityStore } from "@/store/preference-store";

const TrackActivities = () => {
  // const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  // const toggleActivity = (activity: string) => {
  //   if (selectedActivities.includes(activity)) {
  //     setSelectedActivities(
  //       selectedActivities.filter((item) => item !== activity)
  //     );
  //   } else {
  //     setSelectedActivities([...selectedActivities, activity]);
  //   }
  // };

  const { selectedActivities, toggleActivity } = useActivityStore();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text className="text-white font-winky text-start text-5xl mt-10 font-bold">
          Track your activities
        </Text>
        <Text className="text-xl pb-10 font-winky text-white mt-4 font-bold">
          Add depth to your diary entries by selecting activities you engage in
        </Text>
      </View>

      <ScrollView
        className=""
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {activities.map((activity, activityIndex) => (
          <TouchableOpacity
            className="flex flex-row shadow-md items-center gap-4 bg-white rounded-2xl"
            style={{
              marginBottom: 24,
              borderRadius: 16,
              padding: 24,
              borderWidth: 2,
              borderColor: selectedActivities.includes(activity)
                ? "#63c7b2"
                : "transparent",
            }}
            key={activityIndex}
            onPress={() => toggleActivity(activity)}
          >
            {selectedActivities.includes(activity) ? (
              <Check color={"#63c7b2"} size={24} />
            ) : (
              <Circle color={"#000"} size={24} />
            )}
            <Text className=" font-winky text-2xl ">{activity}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default TrackActivities;
