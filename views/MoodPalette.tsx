import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { emojiSets, moodColorPalettes } from "@/utils/configs/colors";
import { useColorPalettStore } from "@/store/preference-store";

const MoodPalette = () => {
  const { selectedPalette, setSelectedPalette } = useColorPalettStore();
  const [selectedEmojiSet, setSelectedEmojiSet] = useState(0);

  const handlePaletteSelect = (index: number) => {
    setSelectedPalette(index);
  };

  const handleEmojiSetSelect = (index: number) => {
    setSelectedEmojiSet(index);
  };

  return (
    <View>
      <View>
        <Text className="text-white font-winky text-start text-5xl mt-10 font-bold">
          Create your mood palette
        </Text>
        <Text className="text-xl pb-10 font-winky text-white mt-4 font-bold">
          Match your mood with your favourite colours
        </Text>
      </View>

      <View className="">
        <Text className=" font-winky !pt-4 text-white text-3xl">Colors</Text>
      </View>

      <ScrollView
        className=""
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.paletteContainer}
      >
        {moodColorPalettes.map((palette, paletteIndex) => (
          <TouchableOpacity
            key={paletteIndex}
            style={[
              styles.paletteCard,
              selectedPalette === paletteIndex && styles.selectedPalette,
            ]}
            onPress={() => handlePaletteSelect(paletteIndex)}
          >
            <View style={styles.colorRow}>
              {palette.map((color, colorIndex) => (
                <View
                  key={colorIndex}
                  style={[styles.colorCircle, { backgroundColor: color }]}
                />
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* TODO */}
      {/* <View className="mt-8">
        <Text className="font-winky text-white text-3xl mb-4">Emoji Theme</Text>

        <View style={styles.emojiSetsContainer}>
          {emojiSets.map((emojiSet, setIndex) => (
            <TouchableOpacity
              key={setIndex}
              style={[
                styles.emojiSetCard,
                selectedEmojiSet === setIndex && styles.selectedEmojiSet,
              ]}
              onPress={() => handleEmojiSetSelect(setIndex)}
            >
              <View style={styles.emojiRow}>
                {emojiSets.map((emoji, emojiIndex) => (
                  <Text
                    key={emojiIndex}
                    style={[
                      styles.emoji,
                      { color: moodColorPalettes[selectedPalette][emojiIndex] },
                    ]}
                  >
                    {emoji}
                  </Text>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View> */}
    </View>
  );
};

export default MoodPalette;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    //   transition: 'background-color 0.3s',
  },
  paletteContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    gap: 10,
  },
  paletteCard: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedPalette: {
    borderWidth: 2,
    borderColor: "black",
  },
  colorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  emojiSetsContainer: {
    flexDirection: "column",
    gap: 10,
  },
  emojiSetCard: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedEmojiSet: {
    borderWidth: 2,
    borderColor: "black",
  },
  emojiRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  emoji: {
    fontSize: 24,
    textAlign: "center",
    width: 30,
    height: 30,
  },
});
